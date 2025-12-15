"use client";

import ComingSoon from "@/components/common/ComingSoon";
import StepOne from "@/components/common/StepOne";
import StepThree from "@/components/common/StepThree";
import StepTwo from "@/components/common/StepTwo";
import { useCallback, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { COMING_SOON_MESSAGES, TABS } from "@/constant/data";

const pageVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const tabContentVariants: Variants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const tabNavVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
};

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<TabType>("cryptoToCash");
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);

  const handleNextStep = useCallback((data?: StepData) => {
    if (data) {
      console.log("Form data:", data);
    }
    setDirection(1);
    setCurrentStep((prev) => prev + 1);
  }, []);

  const handlePreviousStep = useCallback(() => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleTabChange = useCallback((tab: TabType) => {
    setSelectedTab(tab);
    setCurrentStep(1);
    setDirection(0);
  }, []);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onNext={handleNextStep} />;
      case 2:
        return (
          <StepTwo
            onBack={handlePreviousStep}
            onNext={() => handleNextStep()}
          />
        );
      case 3:
        return <StepThree onNext={() => setCurrentStep(1)} />;
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    if (selectedTab === "cryptoToCash") {
      return (
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="h-full"
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      );
    }
    return (
      <motion.div
        variants={tabContentVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="mt-12  justify-center items-center fade-in"
      >
        <ComingSoon text={COMING_SOON_MESSAGES[selectedTab] || ""} />
      </motion.div>
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="md:w-[640px] md:min-h-[758px] p-5 md:p-12 shadow-lg rounded-[30px] bg-white"
      >
        {/* Tab Navigation */}
        {currentStep === 1 && (
          <motion.div
            variants={tabNavVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <div className="bg-[#F2F2F2] text-[#828282] md:w-[392px] flex flex-col md:flex-row text-[14px] justify-between rounded-full transition-all duration-300 ease-in-out">
              {TABS.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`
                    relative px-4 py-1.5 rounded-full
                    transition-colors duration-300
                    ${selectedTab === tab.id ? "text-white" : "text-[#828282]"}
                  `}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {/* Animated background */}
                  {selectedTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className={`absolute inset-0 bg-[#013941] ${
                        tab.id === "cashToCrypto"
                          ? "rounded-full"
                          : tab.id === "cryptoToFiatLoan"
                          ? "rounded-b-[100px] md:rounded-full"
                          : "rounded-t-[100px] md:rounded-full"
                      } `}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Progress Indicator */}
        {/* {selectedTab === "cryptoToCash" && currentStep > 1 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-2 mt-6 mb-4"
          >
            {[1, 2, 3].map((step) => (
              <motion.div
                key={step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step <= currentStep ? "bg-[#013941] w-12" : "bg-gray-200 w-8"
                }`}
                animate={{
                  scale: step === currentStep ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>
        )} */}

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
