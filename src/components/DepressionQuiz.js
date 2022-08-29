import React, { useEffect, useState } from 'react'

import {
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    ExclamationCircleIcon,
    PencilSquareIcon,
} from '@heroicons/react/24/outline'

const communicationFeatures = [
    {
        id: 1,
        name: 'Please read each question carefully',
        description:
            'Please read each question carefully, and indicate how often you have experienced the same or similar challenges in the past 2 weeks.',
        icon: PencilSquareIcon,
    },
    {
        id: 2,
        name: 'Disclaimer',
        description:
            'This quiz is NOT a diagnostic tool. Mental health disorders can only be diagnosed by a licensed mental health provider or doctor.',
        icon: ExclamationCircleIcon,
    },
]


const quizQuestions = [
    {
        id: 1,
        question: "Feeling down, depressed, or hopeless?"

    },
    {
        id: 2,
        question: "Little interest or pleasure in doing things?"

    },
    {
        id: 3,
        question: "Trouble falling or staying asleep, or sleeping too much?"

    },
    {
        id: 4,
        question: "Feeling tired or having little energy?"

    },
    {
        id: 5,
        question: "Poor appetite or overeating?"

    },
    {
        id: 6,
        question: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?"

    },
    {
        id: 7,
        question: "Trouble concentrating on things, such as reading or watching television?"

    },
    {
        id: 8,
        question: "Thoughts that you would be better off dead, or of hurting yourself in some way?"

    },
]

const results = [
    {
        id: 1,
        result: '0-4: None'
    },
    {
        id: 2,
        result: '5-9: Mild'
    },
    {
        id: 3,
        result: '10-14: Moderate'
    },
    {
        id: 4,
        result: '15-24: Moderately severe'
    },

]


export default function DepressionQuiz() {
    const [showButtons, setButtons] = useState(true);
    const [quizCount, setQuizCount] = useState(0);
    const [questionId, setQuestionId] = useState(0);
    const [res, setRes] = useState(0)


    useEffect(() => {
        if (questionId >= 7) {
            setButtons(false)
            if(quizCount > 0 && quizCount < 5) {
                setRes(0)
            } else if (quizCount > 4 && quizCount < 10) {
                setRes(1)
            } else if (quizCount > 9 && quizCount < 15) {
                setRes(2)
            } else if (quizCount > 14) {
                setRes(3)
            }            
        } else {
            console.log('Error')
        }
    }, [questionId])




    if (showButtons) {
        return (
            <div className='max-w-7xl mx-4 sm:mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
                <div className="relative  container">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center ">
                        <div className="lg:col-start-2 ">
                            <h3 className="text-2xl font-bold text-blue-900 tracking-tight sm:text-3xl ">Quiz: Am I Depressed?</h3>
                            <p className="mt-8 text-lg text-gray-900">
                                <span className="font-bold">Assessments can be a valuable first step toward getting treatment. </span>Sometimes, we don’t seek help out of fear that our problems aren’t legitimate or severe enough to warrant professional intervention.
                            </p>

                            <dl className="mt-10 space-y-10">
                                {communicationFeatures.map((item) => (
                                    <div key={item.id} className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white">
                                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                                    </div>
                                ))}
                            </dl>
                            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                                <p className="text-base font-medium text-gray-900">Need help now?</p>
                                <form action="#" method="POST" className="mt-3 sm:flex">
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                                    >
                                        Reach Out
                                    </button>
                                </form>
                                <p className="mt-3 text-sm text-gray-500">
                                    We care about the protection of your data. Read our{' '}
                                    <a href="#" className="font-medium text-gray-900 underline">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                                <div className="bg-blue-900 shadow-2xl sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                                    <div className="px-4 py-8 sm:px-10">
                                        <div>                                            
                                            <h2 className='text-center text-white  font-bold text-3xl'>{quizQuestions[questionId].question}</h2>
                                       </div>
                                      


                                        <div className="mt-6 relative">
                                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                                <div className="w-full border-t border-gray-300" />
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="px-2 text-white bg-blue-900">Please select one of the following</span>
                                            </div>
                                        </div>

                                        <div className="mt-6">



                                            <div>
                                                <button
                                                    onClick={() => setQuizCount(quizCount + 0, setQuestionId(questionId + 1))}
                                                    type="submit"
                                                    className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-900 bg-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                >
                                                    Not at All
                                                </button>
                                                <button
                                                    onClick={() => setQuizCount(quizCount + 1, setQuestionId(questionId + 1))}
                                                    type="submit"
                                                    className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-900 bg-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                >
                                                    Several Days
                                                </button>
                                                <button
                                                    onClick={() => setQuizCount(quizCount + 2, setQuestionId(questionId + 1))}
                                                    type="submit"
                                                    className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-900 bg-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                >
                                                    More than half the days
                                                </button>
                                                <button
                                                    onClick={() => setQuizCount(quizCount + 3, setQuestionId(questionId + 1))}
                                                    type="submit"
                                                    className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-900 bg-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                >
                                                    Nearly every day
                                                </button>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )


    } else {
        return (
            <div className="bg-white">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className=" tracking-tight font-bold text-blue-900">
                <span className="block text-sm">Results</span>
                <span className="block text-3xl md:text-5xl">Your Result: {results[res].result}</span>
              </h2>
              <h2 className='mt-12 text-lg font-semibold text-blue-900'>PLEASE CONTACT YOUR DOCTOR IF:</h2>
              <p className="mt-4 text-lg leading-6 text-zinc-800">
              You are concerned about your mood,
              </p>
              <p className="text-lg leading-6 text-zinc-800">
              or You have completed this questionnaire and it indicates that you may be depressed.
              </p>

              <div className="max-w-2xl mx-auto text-center ">
                                <form action="#" method="POST" className="mt-3 sm:flex">
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                                    >
                                        Reach Out
                                    </button>
                                </form>
                                <p className="mt-3 text-sm text-gray-500">
                                    We care about the protection of your data. Read our{' '}
                                    <a href="#" className="font-medium text-gray-900 underline">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
            </div>
          </div>
        )
    }





}
