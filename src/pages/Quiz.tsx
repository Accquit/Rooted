import React, { useState } from 'react';
import Layout from '@/components/Layout';

const questions = [
  {
    question: '⚡What energy do you want more of in your space?',
    options: [
      'Peace',
      'Positivity',
      'Protection',
      'Growth',
    ],
  },
  {
    question: '🌿 What is your vibe?',
    options: [
      'Cottagecore',
      'Minimalist',
      'Urban chic',
      'Earthy + spiritual',
    ],
  },
  {
    question: '🌻How much sunlight does the area get?',
    options: [
      'A lot of direct sun',
      'Bright but indirect',
      'Shade most of the day',
      'No idea',
    ],
  },
  {
    question: '🕤How often do you want to care for your plant?',
    options: [
      'Daily bonding ',
      'Once or twice a week',
      'Uhh... I woukd prefer a "set it and forget it" buddy',
      'I will try my best, but do not expect much',
    ],
  },
  {
    question: '💬 What kind of plant parent are you?',
    options: [
      'Over-loving',
      'Routine-oriented',
      'Plant newbie',
      'Experienced & obsessed',
    ],
  },
];

const results = [
  {
    type: "The Grounded Healer",
    emoji: "🌟",
    match: "Peace Lily (Spathiphyllum)",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop&crop=center",
    why: [
      "Symbol of peace and spiritual cleansing",
      "Loves indirect light",
      "Perfect for loving caretakers",
      "Elegant and emotionally soothing",
      "Looks great in textured or ceramic pots"
    ],
    icon: "🌱",
    recommendations: [
      {
        name: "Peace Lily",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=200&h=200&fit=crop&crop=center"
      },
      {
        name: "Jade Plant",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop&crop=center"
      },
      {
        name: "Fern",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=200&h=200&fit=crop&crop=center"
      }
    ]
  },
  {
    type: "The Positive Dreamer",
    emoji: "🌞",
    match: "Calathea",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=400&fit=crop&crop=center",
    why: [
      "Brings vibrant, joyful energy with colorful patterned leaves",
      "Enjoys humidity and shade",
      "Loves daily misting and care",
      "Ideal for boho spaces with a creative vibe",
      "Perfect for hands-on, experienced plant lovers"
    ],
    icon: "🌱",
    recommendations: [
      {
        name: "Calathea",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=200&h=200&fit=crop&crop=center"
      },
      {
        name: "Maranta",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=200&fit=crop&crop=center"
      },
      {
        name: "Fittonia",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=200&h=200&fit=crop&crop=center"
      }
    ]
  },
  {
    type: "The Protected Beginner",
    emoji: "🪴",
    match: "Snake Plant (Sansevieria)",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop&crop=center",
    why: [
      "Known for protective, air-purifying energy",
      "Handles all light conditions like a champ",
      "Low-maintenance and hard to kill",
      "Clean, structured look for modern spaces",
      "Perfect confidence booster for newbies"
    ],
    icon: "🌱",
    recommendations: [
      {
        name: "Snake Plant",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=200&h=200&fit=crop&crop=center"
      },
      {
        name: "ZZ Plant",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=200&h=200&fit=crop&crop=center"
      },
      {
        name: "Aloe Vera",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=200&h=200&fit=crop&crop=center"
      }
    ]
  },
  {
    type: "The Growing Spirit",
    emoji: "🌱",
    match: "Pothos (Epipremnum aureum)",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop&crop=center",
    why: [
      "Represents growth, expansion, and creativity",
      "Trailing vines are beautiful and forgiving",
      "Thrives with minimal care and in indirect light",
      "Works beautifully in cozy, vintage-styled pots",
      "Great for people who forget, but care a lot 💚"
    ],
    icon: "🌱",
    recommendations: [
      {
        name: "Pothos",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=200&h=200&fit=crop&crop=center"
      },
      {
        name: "Spider Plant",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=200&fit=crop&crop=center"
      },
      {
        name: "Philodendron",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=200&h=200&fit=crop&crop=center"
      }
    ]
  }
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const handleOption = (idx: number) => {
    const newAnswers = [...answers, idx];
    if (current < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrent(current + 1);
    } else {
      setAnswers(newAnswers);
      setFinished(true);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 py-12">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-xl w-full">
          {!finished ? (
            <>
              <h2 className="text-2xl font-serif text-primary dark:text-white mb-6 text-center">
                Question {current + 1} of {questions.length}
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 text-center">
                {questions[current].question}
              </p>
              <div className="grid gap-4">
                {questions[current].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOption(idx)}
                    className="w-full bg-accent hover:bg-primary text-white px-6 py-3 rounded-lg font-medium shadow transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center">
              {/* Show result tile based on first answer */}
              {(() => {
                const first = answers[0];
                // Peace = 0, Positivity = 1, Protection = 2, Growth = 3
                let resultIdx = 0;
                if (first === 0) resultIdx = 0; // Peace
                else if (first === 1) resultIdx = 1; // Positivity
                else if (first === 2) resultIdx = 2; // Protection
                else if (first === 3) resultIdx = 3; // Growth
                const result = results[resultIdx];
                return (
                  <div className="bg-[#F8F8F2] dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center animate-fade-in">
                    <img src={result.image} alt={result.match} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-accent shadow" />
                    <div className="text-5xl mb-4">{result.emoji}</div>
                    <h2 className="text-2xl font-serif text-primary dark:text-white mb-2">{result.type}</h2>
                    <div className="text-lg mb-4">{result.icon} <span className="font-semibold">Plant Match:</span> {result.match}</div>
                    <ul className="text-left text-gray-700 dark:text-gray-200 space-y-2 mb-2">
                      {result.why.map((w, i) => (
                        <li key={i} className="flex items-start"><span className="mr-2">•</span> {w}</li>
                      ))}
                    </ul>
                    {/* Recommendations */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-primary dark:text-accent mb-3">Plants You Might Love</h3>
                      <div className="flex justify-center gap-4 flex-wrap">
                        {result.recommendations.map((rec, i) => (
                          <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow p-3 flex flex-col items-center w-28">
                            <img src={rec.image} alt={rec.name} className="w-16 h-16 object-cover rounded-full mb-2 border-2 border-accent" />
                            <span className="text-sm text-gray-800 dark:text-gray-200 text-center">{rec.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz; 