import TeenPamphlet from '../assets/Teen-Survival-Toolkit-Cover.jpg'
import ParentPamphlet from '../assets/ParentResource-Thumb.jpg'
import Prosperity from '../assets/Prosperity.png'
import Taylor from '../assets/taylor.png'
import Serkes from '../assets/serkes.png'
import BetterHelp from '../assets/BetterHelp-logo.png'
import HappyGirls from '../assets/happyGirls.png';
import Story from '../assets/story.png'
import Elliot from '../assets/elliot.png'
import React from 'react'
import DepressionQuiz from '../components/DepressionQuiz';
import NeedToTalk from '../components/NeedToTalk';
import ArticlesBanner from '../components/ArticlesBanner';
import SignUp from '../components/SignUp';

const stats = [
  { name: 'National Suicide', stat: 'Prevention Hotline', number: 988 },
  { name: 'Mental Health', stat: 'Community Service', number: 211 },
  { name: 'Immediate', stat: 'Emergency Services', number: 911 },
]

const ideas = [
  { name: 'Managing Stress & Anxiety', stat: "Learn how to manage your stress, cope with anxiety, and thrive—even when you’re going through challenging times." },
  { name: 'Preventing Teen Suicide', stat: 'Learn how to recognize the risk factors for teen suicide, work through your depression, and build emotional resilience.' },
  { name: 'Stopping Teen Bullying', stat: 'Learn how to recognize teen bullying, stand up to it safely, and help prevent it from happening in your social circles.' },
]

export default function Home() {
  return (
    <>
      <div>
        <header
          className="relative flex items-center justify-center h-screen overflow-hidden z-0 mx-4"
        >
          <div
            className="absolute z-30 min-w-full h-3/6 object-cover top-0 object-top bg-blue-600 bg-opacity-50"
          >
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl tracking-tight font-bold text-white sm:text-4xl sm:tracking-tight">
                <span className="block">Storms Don't Last Forever</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-white">
                There will always be
              </p>
              <h2 className="text-6xl tracking-tight font-extrabold text-yellow-500 sm:text-6xl sm:tracking-tight mt-4">
                <span className="block">A BRIGHTER DAY</span>
              </h2>
              <a
                href="#"
                className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-300 sm:w-auto"
              >
                Sign up for free
              </a>
            </div>


          </div>

          <video
            autoPlay
            loop
            muted
            className="h-3/6 top-0 object-cover object-top absolute z-10 min-w-full "
          >
            <source
              src="https://abrighterday.info/wp-content/uploads/2020/11/ABrighterDay-Header-Video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>



          <div className="bg-blue-900 w-full pt-12 sm:pt-16 mt-auto mt-64 sm:mt-96">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl tracking-tight font-bold text-amber-400 sm:text-4xl mt-96 sm:mt-2">
                  Teens for Life
                </h2>
                <p className="mt-3 text-xl text-gray-50 sm:mt-4 ">
                  Reach out for help now!.
                </p>
              </div>
            </div>
            <div className="mt-10 pb-12 bg-white sm:pb-16 ">
              <div className="relative">
                <div className="absolute inset-0 h-1/2 bg-blue-900" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                    <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                      <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r ">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">National Suicide
                          Prevention Hotline</dt>
                        <button type="button"
                          className='px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-400 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400'> Dial 988</button>
                      </div>
                      <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Mental Health
                          Community Services</dt>
                        <button type="button"
                          className='px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-400 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400'>Dial 211</button>

                      </div>
                      <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                        <button type="button"
                          className='px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>Dial 911</button>
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Immediate
                          Emergency Services</dt>

                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>

          </div>
        </header>
        <div className="relative bg-white overflow-hidden mt-12 sm:mt-2">
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-5xl font-bold tracking-tight text-blue-900">Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-700">
                      A Brighter Day unites stress and depression resources with teens and their parents with the goal of stopping teen suicide.
                    </p>
                    <ul>
                      <li className='text-xl mt-4'><span className='font-bold'>It’s okay</span> to feel confused and lost.</li>
                      <li className='text-xl mt-4'><span className='font-bold'>It’s okay</span> to feel like you don’t have the emotional resources to deal with life’s challenges. </li>
                      <li className='text-xl mt-4'><span className='font-bold'>It’s okay</span> to be less than perfect.</li>
                      <li className='text-blue-900 font-bold text-xl mt-6'>No matter how hard it is, or how hard it gets, you’ll always be able to make it through.</li>
                    </ul>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-400 hover:bg-amber-700"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur
                        donec aliquet. Mi venenatis in euismod ut.&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src={Elliot}
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">Elliot Kallen, President of A Brighter Day</div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full ">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={HappyGirls}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>



        </div>
        <div className='mt-4'>

        </div>
        <NeedToTalk />
        <DepressionQuiz />



      </div>
      <div className='bg-blue-900'>

        <div className='max-w-7xl mx-4 sm:mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <div className="relative container text-center">
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {ideas.map((item) => (
                <div key={item.name} className="px-4 py-5 bg-amber-400 shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-2xl tracking-tight font-semibold text-gray-900 text-center">{item.name}</dt>
                  <dd className="text-md mt-1 py-6 font-medium text-white text-center">{item.stat}</dd>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div>

        <div className='max-w-7xl mx-4 sm:mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <div className="relative container text-center">
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div className="px-4 py-5 rounded-lg overflow-hidden sm:p-6 ">
                <dt className="text-2xl tracking-tight font-semibold text-gray-900 text-center">Download Our Teen Survival Kit</dt>
                <img
                  className='mt-4 mx-auto h-96'
                  src={TeenPamphlet}

                />
                <button
                  type="button"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Our Teen Survival Kit
                </button>
              </div>
              <div className="px-4 py-5 rounded-lg overflow-hidden sm:p-6">
                <dt className="text-2xl tracking-tight font-semibold text-gray-900 text-center">Download Our Parent Resource Kit</dt>
                <img
                  className='mt-4 mx-auto h-96'
                  src={ParentPamphlet}

                />
                <button
                  type="button"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Our Parent Resource Kit
                </button>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <NeedToTalk />
      <ArticlesBanner />
      <SignUp />
      <NeedToTalk />

      <div className="bg-white pt-16 lg:py-24">
        <div className="pb-16 bg-amber-500 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-full lg:w-full"
                    src={Story}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">

                <div>
                  <h2 className='text-blue-900 text-2xl font-semibold'>The Story Behind</h2>
                  <h2 className='text-blue-900 text-5xl font-extrabold'>A Brighter Day</h2>

                  <p className="mt-6 text-xl font-medium text-white">
                  Every year, tens of thousands of teenagers struggle with thoughts of helplessness, isolation, depression, and suicide. Sadly, the parents of these teens are the last to learn this, and sometimes after it’s too late to take action.
                  </p>
                  <p className="mt-6 text-xl font-medium text-white">
                  A Brighter Day was founded to help spread awareness about how to recognize and find help for depression, and to build community through social events.
                  </p>
                  <p className="mt-6 text-xl font-medium text-white">
                  From my family to yours, I thank you for being part of A Brighter Day Charity.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-blue-900">ELLIOT KALLEN</p>
                  <p className="text-base font-medium text-blue-900">Founder, A Brighter Day</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-5xl font-extrabold text-blue-900">
          Proud Partners
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 ">
            <img
              className="max-h-36"
              src={Prosperity}
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img className="max-h-36" src={Taylor} alt="Mirage" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 ">
            <img className="max-h-36" src={Serkes} alt="Tuple" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img className="max-h-36" src={BetterHelp} alt="Laravel" />
          </div>
         
        </div>
      </div>
    </div>




    </>
  )
}
