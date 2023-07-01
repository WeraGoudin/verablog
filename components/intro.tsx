import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Vera's Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      I research random questions that pop up in my head and share the results here. 
      I enjoy writing and learning something new through my investigations. 
      I find satisfaction in getting the best possible answer for myself and who knows… 
      Maybe you have been wondering about the same things?
      </h4>
    </section>
  )
}

export default Intro

