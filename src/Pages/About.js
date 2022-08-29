import React from 'react'
import KallenFamily from '../assets/kallen-family.jpeg'
import NeedToTalk from '../components/NeedToTalk'
import Family from '../assets/family.png';

const people = [
  {
    name: 'Elliot Kallen',
    role: 'President',
    imageUrl:
      'http://abrighterday.info/wp-content/uploads/2020/12/Elliot-Office-scaled-1-350x350.jpg.webp',
    bio: 'Elliot brings 25 years of leadership and management experience from the business sector to his role at A Brighter Day. He co-founded A Brighter Day in 2016 with his wife Tammy after the loss of their son Jake, to support young adults in their transition to adulthood and to help prevent teen suicide.',
    bioTwo: "Elliot formerly served as Board President of The Boys and Girls Club of the Diablo Valley, and remains actively involved today. He has helped raise hundreds of thousands of dollars for this organization, which is on the front lines in providing athletic, social and cultural programming to the children of Diablo Valley. Elliot is also active with The Fallen Heroes Charity.",
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Tammy Carlson-Kallen',
    role: 'Executive Director',
    imageUrl:
      'https://abrighterday.info/wp-content/uploads/2021/10/Tammy-Carlson-350x350.jpeg.webp',
    bio: 'Tammy Carlson-Kallen serves as the Executive Director for A Brighter Day. She is intimately involved with all aspects of the charity and focuses on events and fundraising activities, as well as community outreach.',
    bioTwo: "Prior to joining A Brighter Day, Tammy spent 25 years in the Pharmaceutical Industry where she was a leader in the dermatological field.",
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

const files = [
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'http://abrighterday.info/wp-content/uploads/2020/11/diploma.jpg',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'http://abrighterday.info/wp-content/uploads/2020/11/stadium.jpg',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'http://abrighterday.info/wp-content/uploads/2020/11/team.jpg',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'http://abrighterday.info/wp-content/uploads/2020/11/jersey.jpg',
  },
  // More files...
]

export default function About() {
  return (
    <>
    <div className="bg-white pt-16 lg:py-24">
    <h2 className='text-center text-blue-900 text-4xl font-extrabold mb-12'>About Us</h2>
                
    <div className="pb-16 bg-amber-500 lg:pb-0 lg:z-0 lg:relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="relative lg:-my-8">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-12 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-24 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <img
                className="object-cover lg:h-full lg:w-full"
                src={KallenFamily}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="mx-auto ">
            <blockquote>
              <div>
                
                <p className="mt-6 text-lg font-medium text-dark mx-8 ">
                <span className='font-extrabold'>Every year, tens of thousands of teenagers struggle with thoughts of depression, deep sadness, isolation, suicide, stress and the feeling of helplessness.</span> Sadly, and too often, the parents of these teens are the last to learn this, and sometimes too late to take action.
                </p>
                <p className="mt-4 mb-6 text-lg font-medium text-dark mx-8">
                However, today, there are so many terrific resources in formats that teenagers can understand, to help them in multiple ways with these issues, while still allowing teens to retain their privacy and dignity.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='max-w-7xl mx-4 sm:mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
                <div className="relative  container">

                  <h2 className='text-center text-blue-900 text-4xl font-extrabold mb-4'>In Memory of Jake Kallen</h2>
                  <div className="relative mb-16">
                                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                                <div className="w-full border-t border-amber-500" />
                                            </div>
                                        </div>

  <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-16 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500 overflow-hidden">
            <img src={file.source} alt="" className="object-cover pointer-events-none " />
            
          </div>
        </li>
      ))}
    </ul>
</div>
</div>

<NeedToTalk />


    <div className="bg-white">
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
          <p className="text-xl text-gray-500">
          From our interactive and engaging Teen Talent Showcase, social media pages, monthly newsletter, and Mental Wellness blog, our mental health resources are designed to reach teens and young adults through several formats in both digital and live channels.
          </p>
        </div>
        <div className="lg:col-span-2">
          <ul
            role="list"
            className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name} className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-blue-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bioTwo}</p>
                      </div>
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  <NeedToTalk />

  <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-4xl tracking-tight font-bold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Faith Summit Speech</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Video message of John Trautwein – January, 2015 to the Fulton County, GA Faith Summit 2015, on Teen Suicide & Mental Illness Awareness and the roles of Trusted Adults in the lives of teenagers today.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">Sign up to get notified for more content</p>
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
                    Notify me
                  </button>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  We care about the protection of your data. Read our
                  <a href="#" className="font-medium text-gray-900 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">

                  <iframe className='w-full h-72' src="https://www.youtube.com/embed/m-Kta2iMS2A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
            </div>
          </div>
          <div className="relative bg-white mt-16">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 hidden md:block lg:absolute lg:h-full"
            src={Family}
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className=" lg:max-w-lg ">
            <h2 className="leading-6 text-blue-600 font-semibold">A Letter</h2>
            <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">from Elliot Kallen</h3>
            <p className="mt-8 text-lg text-gray-500">
            A Brighter Day, the 501(c)(3) Charity which Unites Stress and Depression Resources with Teenagers, will have reached thousands of teens in only our sixth year. Sadly, the motivation for this charity came from the suicide of my son, Jake, while attending the University of Montana in 2015. However, we are making a difference in the lives of teenagers and I have received many cards form teens thanking us for savings their lives.
            </p>
            <p className="mt-8 text-lg text-gray-500">
            A Brighter Day, the 501(c)(3) Charity which Unites Stress and Depression Resources with Teenagers, will have reached thousands of teens in only our sixth year. Sadly, the motivation for this charity came from the suicide of my son, Jake, while attending the University of Montana in 2015. However, we are making a difference in the lives of teenagers and I have received many cards form teens thanking us for savings their lives.
            </p>
            <p className="mt-8 text-lg text-gray-500">
            A Brighter Day, the 501(c)(3) Charity which Unites Stress and Depression Resources with Teenagers, will have reached thousands of teens in only our sixth year. Sadly, the motivation for this charity came from the suicide of my son, Jake, while attending the University of Montana in 2015. However, we are making a difference in the lives of teenagers and I have received many cards form teens thanking us for savings their lives.
            </p>
            <p className="mt-8 text-lg text-gray-500">
            Thank you for your support.
            </p>
            <p className="mt-8 text-2xl text-blue-900 font-bold">
            Elliot H. Kallen
            </p>
          </div>
        </div>
      </div>
    </div>
    
        </main>
        <div className="bg-amber-500 mt-8">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-5xl tracking-tight font-bold text-white sm:text-6xl">
          <span className="block">Get In Touch</span>
        </h2>
        <h2 className="text-xl tracking-tight font-bold text-white mt-4">
          <span className="block">elliot@abrighterday.org</span>
        </h2>
        <h2 className="text-xl tracking-tight font-bold text-white mt-4">
          <span className="block">(510) 206-1103</span>
        </h2>
        <h2 className="text-xl tracking-tight font-bold text-white mt-4">
          <span className="block">calendly.com/elliotkallen</span>
        </h2>
      </div>
    </div>


  </>
  )
}
