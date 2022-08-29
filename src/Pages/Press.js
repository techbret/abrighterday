import Elliot from '../assets/elliot.png';

const posts = [
  {
    title: 'Teen Showcases Talent to Stop Teen Suicide',
    href: 'https://finance.yahoo.com/news/teen-showcases-talent-stop-teen-130000329.html',
    description:
      'The reverberating buzz of a sitar marks the start of the Kathak dance performance. She assumes a relaxed, poised stance. The drumbeat begins, and in unison, her elaborate footwork starts up. Her feet..',
    date: 'Nov 17, 2021',
    datetime: '2020-03-16',
  },
  {
    title: 'The Suicide Prevention Show',
    href: 'https://www.youtube.com/watch?v=TiYHmJg3FiA',
    description: 'Elliot Kallen and Jackie Simmons, the co-founder of the Make It A Great Day Movement, TEDx Speaker, and host of The Suicide Prevention Show, have a conversation about reducing mental health stigma.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
  },
  {
    title: 'Commonwealth Club of California Podcast',
    href: 'https://www.scribd.com/listen/podcast/418645607',
    description:
      'Elliot Kallen and Dr. Patrick O’Reilly, a clinical psychologist specializing in anxiety disorders, have a conversation about A Brighter Day and the Teen Talent Showcase.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
  },
  {
    title: 'Natural Solutions with Dr. Jay',
    href: 'http://www.naturalsolutionswithdrjay.com/2019/04/11/nsdj70-elliot-kallen-a-brighter-day-teen-suicide-prevention-with-dr-jay-sordean/',
    description:
      "Dr. Jay Sordean, author of Super Brain: Maximize Your Brain Health for a Better Life, talk about A Brighter Day conversation and the Teen Talent Showcase.",
    date: 'Apr 11, 2019',
    datetime: '2020-01-29',
  },
]

export default function Press() {
  return (
    <>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">Press</h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-gray-500">Get weekly articles in your inbox on how to grow your business.</p>
              <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 lg:max-w-xs"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                  <button
                    type="button"
                    className="w-full bg-amber-500 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:inline-flex"
                  >
                    Send a Media Query
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-3">
                  <a href={post.href} className="text-base font-semibold text-blue-600 hover:text-blue-500">
                    Read full article
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <svg
            className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
            width={784}
            height={404}
            fill="none"
            viewBox="0 0 784 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
          </svg>

          <svg
            className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
          </svg>

          <div className="relative lg:flex lg:items-center">
            <div className="hidden lg:block lg:flex-shrink-0">
              <img
                className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                src={Elliot}
                alt=""
              />
            </div>

            <div className="relative lg:ml-10">
              <h2 className="text-4xl font-bold text-blue-900">Media Inquiries</h2>
              <blockquote className="relative">
                <div className="text-2xl leading-9 font-medium text-gray-900 mt-4">
                  <p>
                    If you are a member of the media and would like to interview Elliot Kallen, or would like to be put in touch with A Brighter Day’s marketing team, please contact Michael Hurwitz at <span className="text-blue-500">michael@abrighterday.org.</span>
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex">
                    <div className="flex-shrink-0 lg:hidden">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={Elliot}
                        alt=""
                      />
                    </div>
                    <div className="ml-4 lg:ml-0">
                      <button
                        type="button"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Contact Us
                      </button>



                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
