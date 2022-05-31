import { Journal } from "./journal";

export const JOURNAL: Journal = {
  title: 'Jean\'s Journal',
  entries: [
    {
      date: "2022-02-23",
      pretty_date: "February 23, 2022",
      body: "A nice article digging into the roots of \"[make it work, make it right, make it fast](https://www.sicpers.info/2022/02/aphorism-considered-harmful/)\"."
    },
    {
      date: "2022-02-10",
      pretty_date: "February 10, 2022",
      body: "[Htmx](https://htmx.org/) is a new framework for frontend.  It does everything through HTML tags."
    },
    {
      date: "2022-01-26",
      pretty_date: "January 26, 2022",
      body: "Gee Paw Hill wrote a thread on Twitter on [the well of geek joy](https://twitter.com/GeePawHill/status/1478950180904972293).  In this thread, he talks about how the biggest problems facing software engineers in their career are not technical.  They have to do with how their job will slowly grind away at the joy they once found in programming.  To counter this, they must find ways to stay connected (or reconnect) to the well of geek joy that set them on this path in the first place.  If not during office hours, then maybe after hours.\n\nUnrelated, but here is a nice article on some [bad patterns in exception handling](https://xp123.com/articles/code-smells-in-exceptions/).  The article targets Java, but I feel it is just as applicable in Ruby and maybe other languages with catchable exceptions too.",
    },
  ],
}
