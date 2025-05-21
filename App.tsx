import React, { useState, useEffect, useCallback } from 'react';
import { ChatMessage, Sender, AppView, GameState, Achievement, Product, GuidedCase, PrimavitaTip, QuickReply } from './types';
import { INITIAL_ACHIEVEMENTS, PRIMAVITA_PRODUCTS, PRIMAVITA_TIPS, GUIDED_CASES } from './constants';
import ChatbotWindow from './components/ChatbotWindow';
import ProductCatalogModal from './components/ProductCatalogModal';
import AchievementToast from './components/AchievementToast';
import GuidedInteraction from './components/GuidedInteraction';
import { generateContentWithGemini } from './services/geminiService';
import HiTechToothIcon from './components/HiTechToothIcon';

const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentView, setCurrentView] = useState<AppView>('chat');
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    achievements: INITIAL_ACHIEVEMENTS,
  });
  const [activeAchievement, setActiveAchievement] = useState<Achievement | null>(null);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [currentGuidedCase, setCurrentGuidedCase] = useState<GuidedCase | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);


  const addMessage = useCallback((text: string, sender: Sender, quickReplies?: QuickReply[], productRecommendationId?: string, tipKey?: string) => {
    const newMessage: ChatMessage = {
      id: `${sender}-${Date.now()}`,
      text,
      sender,
      timestamp: new Date(),
      quick_replies: quickReplies,
      product_recommendation_id: productRecommendationId,
      tip_key: tipKey,
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const awardPointsAndCheckAchievements = useCallback((points: number) => {
    setGameState(prev => {
      const newScore = prev.score + points;
      const updatedAchievements = prev.achievements.map(ach => {
        if (!ach.unlocked && ach.points_required && newScore >= ach.points_required) {
          setActiveAchievement({ ...ach, unlocked: true });
          return { ...ach, unlocked: true };
        }
        return ach;
      });
      return { score: newScore, achievements: updatedAchievements };
    });
  }, []);
  
  const unlockSpecificAchievement = useCallback((achievementId: string) => {
    setGameState(prev => {
        const achievementToUnlock = prev.achievements.find(ach => ach.id === achievementId);
        if (achievementToUnlock && !achievementToUnlock.unlocked) {
            setActiveAchievement({ ...achievementToUnlock, unlocked: true });
            const updatedAchievements = prev.achievements.map(ach => 
                ach.id === achievementId ? { ...ach, unlocked: true } : ach
            );
            return { ...prev, achievements: updatedAchievements };
        }
        return prev;
    });
  }, []);


  useEffect(() => {
    addMessage("Olá! Eu sou o P.R.I.M.O, robo expert da Primavita. Como posso te ajudar hoje?", Sender.BOT);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Runs once on mount

  const handleSendMessage = async (text: string, sender: Sender) => {
    addMessage(text, sender);
    if (sender === Sender.USER) {
      setIsLoadingAI(true);
      addMessage("Pensando... 🧠", Sender.BOT); // Temp thinking message
      const aiResponse = await generateContentWithGemini(text);
      setMessages(prev => prev.slice(0, -1)); // Remove "Thinking..."
      addMessage(aiResponse, Sender.BOT);
      setIsLoadingAI(false);
    }
  };
  
  const handleQuickReply = useCallback((payload: string, action_type: 'next_step' | 'product_info' | 'custom_action', points?: number, tipKey?: string) => {
    addMessage(`Selecionado: ${payload}`, Sender.USER); 
    if (points) {
        awardPointsAndCheckAchievements(points);
    }
    if (tipKey) {
        const tip = PRIMAVITA_TIPS.find(t => t.key === tipKey);
        if (tip) {
            addMessage(`${tip.emoji || '💡'} ${tip.text_pt}`, Sender.BOT);
        }
    }
  }, [awardPointsAndCheckAchievements]);


  const handleSetView = (view: AppView) => {
    setCurrentView(view);
    if (view === 'catalog') setIsCatalogOpen(true);
    else setIsCatalogOpen(false);

    if (view === 'chat' && messages.length === 0) {
        addMessage("Olá! Eu sou o P.R.I.M.O, robo expert da Primavita. Como posso te ajudar hoje?", Sender.BOT);
    }
  };

  const handleSelectCase = (caseData: GuidedCase) => {
    setCurrentGuidedCase(caseData);
    setCurrentView('in_guided_case');
    addMessage(`Iniciando caso clínico: ${caseData.name_pt}`, Sender.USER); 
    
    const firstStep = caseData.steps[caseData.start_step_id];
    if(firstStep) {
        addMessage(
            firstStep.bot_question_pt, 
            Sender.BOT
        );
    }
  };
  
  const handleGuidedStepComplete = useCallback((message: ChatMessage, pointsAwarded: number, productRecommendationId?: string, tipKey?: string, achievementToUnlockId?: string) => {
    setMessages(prev => [...prev, message]);

    if (pointsAwarded > 0) {
        awardPointsAndCheckAchievements(pointsAwarded);
    }
    if (achievementToUnlockId) {
        unlockSpecificAchievement(achievementToUnlockId);
    }
  }, [awardPointsAndCheckAchievements, unlockSpecificAchievement]);


  const exitGuidedCase = () => {
    addMessage("Caso clínico finalizado ou interrompido. Voltando ao menu principal.", Sender.BOT);
    setCurrentGuidedCase(null);
    setCurrentView('chat');
     if (messages.length === 0 || messages[messages.length-1].sender === Sender.USER ) { 
        addMessage("Como posso te ajudar agora?", Sender.BOT);
    }
  };


  return (
    <div className="h-screen max-h-screen flex flex-col font-sans antialiased items-center justify-center p-2 sm:p-4 bg-gradient-to-br from-primavita-primaryblue/30 via-primavita-lightgray to-primavita-blue/30">
      <div className="w-full max-w-2xl h-full max-h-[95vh] sm:max-h-[680px] md:max-h-[720px] lg:max-h-[800px] flex flex-col">
        {currentView !== 'in_guided_case' && (
          <ChatbotWindow
            messages={messages}
            onSendMessage={handleSendMessage}
            onQuickReply={handleQuickReply}
            currentView={currentView}
            gameState={gameState}
            onSetView={handleSetView}
            onSelectCase={handleSelectCase}
          />
        )}
        {currentView === 'in_guided_case' && currentGuidedCase && (
          <GuidedInteraction
            caseData={currentGuidedCase}
            onStepComplete={handleGuidedStepComplete}
            onExit={exitGuidedCase}
          />
        )}
      </div>

      <ProductCatalogModal isOpen={isCatalogOpen} onClose={() => { setIsCatalogOpen(false); setCurrentView('chat'); }} />
      <AchievementToast achievement={activeAchievement} onClose={() => setActiveAchievement(null)} />
      
      {isLoadingAI && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl flex items-center space-x-3">
                <HiTechToothIcon className="w-10 h-10 animate-spin text-primavita-primaryblue"/>
                <span className="text-lg font-medium text-primavita-darkgray">Processando com IA...</span>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;