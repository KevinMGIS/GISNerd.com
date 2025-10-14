import BlogPost from '../BlogPost'

export default function WhyIBuiltTheGrid() {
  return (
    <BlogPost>
      <h1>Why I Built The Grid and What It Taught Me About System Design</h1>
      <p>
        The Grid started as two separate tools I was building for FLD&P. At first, each project had its own purpose and direction, but as I worked, I realized they could become something more. If I brought them together under one umbrella, I could create a single system that connected everything. One login, one interface, one place for our company to work smarter and stay organized.
      </p>
      <p>
        The Grid is now the FLD&P intranet. It houses the company’s permit tracker, workload tracker, submittal schedule, and company news under a unified authentication system. It has grown into the central hub for our internal operations and a core part of how we manage projects day to day.
      </p>
      <p>
        Before The Grid, our systems were scattered. The permit tracker was an outdated spreadsheet that was difficult to maintain and easy to overlook. There was no clear way to see what people were working on or what needed attention next. Everyone was managing their own lists, which made it hard to stay aligned.
      </p>
      <p>
        Once I started building, it became clear that bringing everything together would transform how we worked. My goal was to make it modular, user friendly, and visually appealing. Each part of The Grid needed to function on its own but also connect seamlessly with the rest.
      </p>
      <p>
        The permit tracker and workload tracker became the foundation. The permit tracker replaced the old spreadsheet with a live, accurate, and easily accessible system. The workload tracker gave the team visibility into what each person was working on and what needed to move forward.
      </p>
      <p>
        I built the first version quietly. No presentation or pitch. I finished the permit tracker, showed it to the team, and they immediately saw the value. From there, adoption was easy and momentum built quickly. One of our staff even suggested the idea for the workload tracker, which made the project feel shared and collaborative.
      </p>
      <p>
        Building The Grid taught me to think about system design differently. It showed me how to use my IT background and system thinking in new ways. Instead of focusing only on code or databases, I learned to think modularly. Each piece should be strong on its own but even more powerful as part of a larger system.
      </p>
      <p>
        It also changed how I view the relationship between builders and users. The Grid was never meant to be a one-size-fits-all solution. It evolved through use, feedback, and iteration. That process taught me that the best systems grow organically. They start small, solve real problems, and expand piece by piece.
      </p>
      <p>
        That modular approach has carried into everything I do. Whether it is a GIS analysis, a web app, or a new internal tool, I now look for ways to design in reusable, flexible parts. It makes systems easier to maintain, easier to expand, and more enjoyable to build.
      </p>
      <p>
        The Grid began as a few lines of code written to fix simple problems. It ended up becoming the backbone of how our company operates. More than anything, it reminded me why I love building systems. Not for complexity or perfection, but for clarity, connection, and the satisfaction of seeing everything fit together with purpose.
      </p>
    </BlogPost>
  )
}
