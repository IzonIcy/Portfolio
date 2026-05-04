export type Article = {
  slug: string
  title: string
  description: string
  content: string[]
  rawContent?: string
  references?: Array<{
    label: string
    href: string
  }>
}

export const articles: Article[] = [
  {
    slug: 'agency-is-a-trap',
    title: 'Agency is a Trap',
    description: 'why self-monitoring disguised as agency often breaks performance.',
    rawContent: `Defining agency as something to possess, display, or improve makes it a status symbol. Predictably, this shifts attention from the task itself to how your actions reflect on you. As a result, performance declines, learning slows, and external forces like incentives, shame, or low status become more influential.

Psychology has had a name for this for decades: choking under pressure. Pressure pushes attention on itself, and skilled action very often falls apart when the mind starts supervising what used to run smoothly. Baumeister's model puts it bluntly: pressure "increases the conscious attention to the performer's own process of performance," and attention "disrupts the automatic or overlearned nature of the execution." [1]

The agency definition that has taken over founder culture and self-improvement circles recreates that pressure on purpose. It tells people to keep two scoreboards running in their head: not only whether the action worked, but whether the action proves something about the actor. This secondary layer is the killer behind what, otherwise, is a good thing.
The true problem is self-monitoring

Having skills, whether in sports, writing, negotiating, coding, or leading a meeting, relies heavily on routines that run without proper narration. Beilock and Carr describe expert performance as "encoded in a procedural form that supports performance without the need for step-by-step attentional control." [2]

When you start checking yourself mid-action, you do two damaging things at once. First, you take away attention from the task. Second, you change a live situation into a test of identity. That is why "high agency" talk so often produces fragile people who are loud about intent and inconsistent in results. They are busy proving they are the kind of person who does things, which is very different from doing the actual thing well.

DeCaro and colleagues summarize the same split: "Explicit monitoring theories claim essentially the opposite: that pressure prompts individuals to attend closely to skill processes in a manner that disrupts execution." The point here is that the failure mode is well-mapped. Attention turns inward, execution falls apart. [3]
Why "trying to have agency" doesn't succeed

Wanting to be effective is fine. The backfire comes from treating effectiveness like a trait you must hold onto in real time.

If the mind is asking, even quietly, "Am I being agentic right now?", it has already introduced a second job. That second job is image management. Image management competes with perception. You start seeing the world through the lens of what holds the story instead of what updates the loop.

Measuring agency often reduces it. Metrics create hierarchy, hierarchy creates self-consciousness, and self-consciousness stalls real progress.
What actually predicts improvement

The clean loop is simple and unglamorous: do your best, notice what happens, learn, adjust. No identity ceremony required.

Research on attention in motor learning makes the same point from another angle. When people focus on the effects of their actions in the world instead of their body mechanics, they often learn faster and perform better. In one paper, the authors put it directly: focusing on distant effects enhances learning by "promoting the utilization of more natural control mechanisms."

A review by Wulf and Prinz reports a consistent pattern across studies: instructions that direct attention to movement effects "are more effective than instructions directing their attention to the movements themselves." [4]

Translate that out of sports science and into normal life: the more attention is spent on the work and its feedback, the less attention is spent on self-narration, and the better the system updates.
A practical way to use agency without turning it into a new identity game

The trick is to aim at conditions, not labels. Agency talk fails because it makes "being a certain kind of person" the goal. A better goal is reducing interference during your task, and afterwards, improving the feedback loop.

Here are changes you can make, which actually work well:

Stop doing this:

    Treating decisiveness as a personality trait instead of a skill.
    Turning every choice into a showcase of your worth.
    Protecting a self-made story when the output of your actions disagree with it.

Do more of this:

    Make smaller bets that actually return feedback, then iterate on it.
    After a task, ask what changed in the world, not what the action implies about you or your image.
    Keep your promises to yourself, and keep them small and frequent, so your feedback stays honest.
    Let the results teach you, even when they're embarrassing.

Notice what is missing: there is no requirement to "feel agentic", identify as agentic, or talk about agency at all.
The uncomfortable part

My view insults a lot of popular motivational culture. It also removes a lot of the excuses. There is no caste system of "agentic" people versus everyone else. There is only a person in a situation, with some mix of clarity, skill, fear, ego, and incentives, producing a result, then self-improving or not.

People who look "high agency" from the outside usually have one boring advantage: they spend less time negotiating with themselves. They do something, they see what happened, and they change course.

Sources:

    [1] Baumeister, R F. "Choking under pressure: self-consciousness and paradoxical effects of incentives on skillful performance." Journal of personality and social psychology vol. 46,3 (1984): 610-20. doi:10.1037//0022-3514.46.3.610
    [2] Beilock, S L, and T H Carr. "On the fragility of skilled performance: what governs choking under pressure?." Journal of experimental psychology. General vol. 130,4 (2001): 701-25. PubMed
    [3] DeCaro, Marci S et al. "Choking under pressure: multiple routes to skill failure." Journal of experimental psychology. General vol. 140,3 (2011): 390-406. doi:10.1037/a0023466
    [4] Wulf, Gabriele, and Wolfgang Prinz. "Directing Attention to Movement Effects Enhances Learning: A Review." Psychonomic Bulletin & Review, 2001. PDF`,
    content: [
      `Defining agency as something to possess, display, or improve makes it a status symbol. Predictably, this shifts attention from the task itself to how your actions reflect on you. As a result, performance declines, learning slows, and external forces like incentives, shame, or low status become more influential.`,
      `Psychology has had a name for this for decades: choking under pressure. Pressure pushes attention on itself, and skilled action very often falls apart when the mind starts supervising what used to run smoothly. Baumeister's model puts it bluntly: pressure "increases the conscious attention to the performer's own process of performance," and attention "disrupts the automatic or overlearned nature of the execution." [1]`,
      `The agency definition that has taken over founder culture and self-improvement circles recreates that pressure on purpose. It tells people to keep two scoreboards running in their head: not only whether the action worked, but whether the action proves something about the actor. This secondary layer is the killer behind what, otherwise, is a good thing.`,
      `The true problem is self-monitoring`,
      `Having skills, whether in sports, writing, negotiating, coding, or leading a meeting, relies heavily on routines that run without proper narration. Beilock and Carr describe expert performance as "encoded in a procedural form that supports performance without the need for step-by-step attentional control." [2]`,
      `When you start checking yourself mid-action, you do two damaging things at once. First, you take away attention from the task. Second, you change a live situation into a test of identity. That is why "high agency" talk so often produces fragile people who are loud about intent and inconsistent in results. They are busy proving they are the kind of person who does things, which is very different from doing the actual thing well.`,
      `DeCaro and colleagues summarize the same split: "Explicit monitoring theories claim essentially the opposite: that pressure prompts individuals to attend closely to skill processes in a manner that disrupts execution." The point here is that the failure mode is well-mapped. Attention turns inward, execution falls apart. [3]`,
      `Why "trying to have agency" doesn't succeed`,
      `Wanting to be effective is fine. The backfire comes from treating effectiveness like a trait you must hold onto in real time.`,
      `If the mind is asking, even quietly, "Am I being agentic right now?", it has already introduced a second job. That second job is image management. Image management competes with perception. You start seeing the world through the lens of what holds the story instead of what updates the loop.`,
      `Measuring agency often reduces it. Metrics create hierarchy, hierarchy creates self-consciousness, and self-consciousness stalls real progress.`,
      `What actually predicts improvement`,
      `The clean loop is simple and unglamorous: do your best, notice what happens, learn, adjust. No identity ceremony required.`,
      `Research on attention in motor learning makes the same point from another angle. When people focus on the effects of their actions in the world instead of their body mechanics, they often learn faster and perform better. In one paper, the authors put it directly: focusing on distant effects enhances learning by "promoting the utilization of more natural control mechanisms."`,
      `A review by Wulf and Prinz reports a consistent pattern across studies: instructions that direct attention to movement effects "are more effective than instructions directing their attention to the movements themselves." [4]`,
      `Translate that out of sports science and into normal life: the more attention is spent on the work and its feedback, the less attention is spent on self-narration, and the better the system updates.`,
      `A practical way to use agency without turning it into a new identity game`,
      `The trick is to aim at conditions, not labels. Agency talk fails because it makes "being a certain kind of person" the goal. A better goal is reducing interference during your task, and afterwards, improving the feedback loop.`,
      `Here are changes you can make, which actually work well:`,
      `Stop doing this:`,
      `- Treating decisiveness as a personality trait instead of a skill.`,
      `- Turning every choice into a showcase of your worth.`,
      `- Protecting a self-made story when the output of your actions disagree with it.`,
      `Do more of this:`,
      `- Make smaller bets that actually return feedback, then iterate on it.`,
      `- After a task, ask what changed in the world, not what the action implies about you or your image.`,
      `- Keep your promises to yourself, and keep them small and frequent, so your feedback stays honest.`,
      `- Let the results teach you, even when they're embarrassing.`,
      `Notice what is missing: there is no requirement to "feel agentic", identify as agentic, or talk about agency at all.`,
      `The uncomfortable part`,
      `My view insults a lot of popular motivational culture. It also removes a lot of the excuses. There is no caste system of "agentic" people versus everyone else. There is only a person in a situation, with some mix of clarity, skill, fear, ego, and incentives, producing a result, then self-improving or not.`,
      `People who look "high agency" from the outside usually have one boring advantage: they spend less time negotiating with themselves. They do something, they see what happened, and they change course.`,
      `Sources:`,
      `[1] Baumeister, R F. "Choking under pressure: self-consciousness and paradoxical effects of incentives on skillful performance." Journal of personality and social psychology vol. 46,3 (1984): 610-20. doi:10.1037//0022-3514.46.3.610`,
      `[2] Beilock, S L, and T H Carr. "On the fragility of skilled performance: what governs choking under pressure?." Journal of experimental psychology. General vol. 130,4 (2001): 701-25. PubMed`,
      `[3] DeCaro, Marci S et al. "Choking under pressure: multiple routes to skill failure." Journal of experimental psychology. General vol. 140,3 (2011): 390-406. doi:10.1037/a0023466`,
      `[4] Wulf, Gabriele, and Wolfgang Prinz. "Directing Attention to Movement Effects Enhances Learning: A Review." Psychonomic Bulletin & Review, 2001. PDF`,
    ],
    references: [
      {
        label:
          '[1] Baumeister, R F. "Choking under pressure: self-consciousness and paradoxical effects of incentives on skillful performance."',
        href: 'https://doi.org/10.1037/0022-3514.46.3.610',
      },
      {
        label: '[2] Beilock, S L, and T H Carr. "On the fragility of skilled performance: what governs choking under pressure?."',
        href: 'https://pubmed.ncbi.nlm.nih.gov/11768066/',
      },
      {
        label: '[3] DeCaro, Marci S et al. "Choking under pressure: multiple routes to skill failure."',
        href: 'https://doi.org/10.1037/a0023466',
      },
      {
        label: '[4] Wulf, Gabriele, and Wolfgang Prinz. "Directing Attention to Movement Effects Enhances Learning: A Review."',
        href: 'https://doi.org/10.3758/BF03196335',
      },
    ],
  },
  {
    slug: 'god-is-a-manmade-machine',
    title: 'God is a Manmade Machine',
    description: 'why God works like a human-built machine for coordination, meaning, and control.',
    rawContent: `God was never about a man in the sky. God is a machine built by humans, running on humans, maintained by humans, and producing real effects in the world because humans treat it as real. For centuries, billions of people have believed in an all-knowing, all-seeing God across wildly different religions, languages, and geographies. There is no physical evidence for any of it. But there doesn't need to be, because the mechanism was never supernatural. It's psychological.

Prefacing this: I'm not a hardline materialist who thinks science has all the answers. I am religious. But I also read the research, and I keep landing on the same conclusion: "God" is best understood not just as a being, but as a coordination technology. One that humans accidentally invented, then couldn't stop running. Holding both of those ideas at the same time is the point.

We are wired to see agents that aren't there

The starting point is the human brain itself. Cognitive scientists have identified what they call a Hyperactive Agency Detection Device, or HADD. The idea, first developed by Stewart Guthrie and later refined by Justin Barrett, is simple: our minds are biased toward detecting intentional agents in our environment, even when none exist. [1]

You hear a branch snap in the woods and your first instinct is that something is there. Not wind. Not gravity. Something with intentions. The cost of falsely detecting an agent (you run from nothing) is far lower than the cost of missing a real one (you become food). So natural selection favored brains that over-detect agency. The side effect is that we see purpose, intention, and design in places where there is none. Storms, disease, coincidence, death. The leap from "something caused this" to "someone caused this" to "God caused this" is not a leap at all. It's the path of least cognitive resistance.

Watched people are nice people

Here's where it gets interesting. We do more than imagine agents. The mere feeling of being watched changes how we act.

Bateson, Nettle, and Roberts placed an image of a pair of eyes above an honesty box in a university coffee room, the kind where you drop money for your drink on the honor system. When the eyes were displayed instead of a neutral image, people paid nearly three times as much. A picture of eyes on a wall tripled honest payment. Not a camera. Not a person. Not a consequence. A picture. [2]

Shariff and Norenzayan demonstrated the same effect with religious concepts specifically. Subjects who were implicitly primed with God-related words (through an unrelated word task, not a sermon) allocated more money to anonymous strangers than those primed with neutral words. Activating the concept of God, even unconsciously, was enough to increase prosocial behavior. [3]

This is the engine of the machine. God doesn't need to exist to change what people do. The belief that God is watching does the work all by itself.

Punitive gods as social infrastructure

Norenzayan's broader research program, laid out in Big Gods, argues that this surveillance effect allowed human societies to scale beyond small tribal groups. Societies that developed beliefs in moralizing, punitive, all-knowing gods were better able to sustain large-scale cooperation among strangers. [4]

Think about the problem early societies faced. In a group of 50, everyone knows everyone. Cheaters get caught because the community is small enough for reputation to do the policing. But once you're dealing with thousands of strangers, reputation breaks down. You need something else to keep people in line.

The answer, across culture after culture, was a god who sees everything and punishes defectors. The gods that scaled civilizations weren't the ones painting sunsets or loving unconditionally. They were the ones keeping score. And the data backs this up: countries with higher rates of belief in hell have lower national crime rates, while belief in heaven alone does not predict the same effect. The threat of divine punishment does more behavioral work than the promise of divine reward. [4]

Strip away the theology and what's left is infrastructure. Punitive gods are a social technology for enforcing cooperation at scale, and they work whether or not anyone upstairs is actually watching.

religion is a social loop, not a private belief

durkheim saw this over a century ago. in the elementary forms of the religious life, he argued that religion is fundamentally social, not personal. the sacred is not a quality of objects or beings. it's a quality that groups project onto things through collective ritual. what people actually worship when they worship god, durkheim claimed, is the power of their own community, experienced as something larger than any individual. [5]

he called the intense shared experience of ritual "collective effervescence," the feeling of losing yourself in a crowd, of being part of something bigger. it happens at religious services, but also at concerts, protests, and sporting events. the feeling is real. the interpretation, that it's evidence of the divine, is added afterward.

this is the feedback loop that keeps the machine running. people gather, perform rituals, and feel something powerful; attributing that feeling to god. this attribution reinforces the belief. the belief motivates more gathering and more ritual. the cycle sustains itself, and the god it produces is, from a functional standpoint, very much real. A socially distributed force that shapes behavior, norms, and institutions.

the god-shaped panopticon

foucault's panopticon is the secular version of the same architecture. bentham designed a prison where inmates could be watched at any time but could never tell when they were actually being observed. after enough time, the inmates internalized the surveillance and began policing themselves. the guard didn't need to be in the tower. the possibility of the guard was enough. [6]

god is the original panopticon. you can't confirm whether god is watching right now, but you also can't confirm that god isn't, and that uncertainty is the mechanism. foucault wrote that the major effect of the panopticon is "to induce in the inmate a state of conscious and permanent visibility that assures the automatic functioning of power." replace "inmate" with "believer" and the sentence doesn't change meaning at all. [6]

the difference is that bentham's panopticon required a building. god requires only a shared story and a community willing to enforce it.

death is the real engine

terror management theory, developed by greenberg, pyszczynski, and solomon, adds another layer. their argument: the awareness of mortality is so psychologically destabilizing that humans need cultural belief systems to buffer against the terror of death. religion, with its promise of an afterlife and cosmic meaning, is the most effective buffer available. [7]

hundreds of studies have tested this by making mortality salient, reminding people that they will die, and then measuring what happens. consistently, mortality salience causes people to cling harder to their cultural worldviews and defend their belief systems more aggressively. religious beliefs are particularly effective because they are all-encompassing, difficult to disprove, and promise literal immortality. [7]

god functions as cooperation mechanism and anxiety buffer simultaneously, morphing human behavior while helping people cope with the terror of knowing they will die.

The uncomfortable conclusion

God, understood this way, is the most successful technology humans have ever built. Assembled from stories, rituals, fear, and the deep cognitive architecture of a species that can't stop looking for someone behind the curtain.

This doesn't mean religion is fake in some dismissive sense. The effects are real. The communities are real. The moral behavior is real. The comfort in the face of death is real. What's constructed is the agent, the invisible watcher, and the construction is so effective precisely because it maps perfectly onto how human brains already work.

The punitive God becomes real the moment millions of people act as if it exists, and their coordinated action produces real consequences: charity, law, war, shame, belonging, exclusion. The machine runs on belief, and belief runs on psychology, and the output is a world that genuinely looks like it has a God in it, if you don't look at the wiring.

My view isn't that people are stupid for believing. My view is that the system is unbelievably well-engineered, by accident, by natural selection, by cultural evolution, and that understanding the engineering doesn't require you to hate the building. It just requires you to notice that nobody drew the blueprints from above.

Sources:

    [1] Barrett, Justin L. "Exploring the natural foundations of religion." Trends in Cognitive Sciences vol. 4,1 (2000): 29-34; Guthrie, Stewart E. Faces in the Clouds: A New Theory of Religion. Oxford University Press, 1993.
    [2] Bateson, Melissa, Daniel Nettle, and Gilbert Roberts. "Cues of being watched enhance cooperation in a real-world setting." Biology Letters vol. 2,3 (2006): 412-414. doi:10.1098/rsbl.2006.0509
    [3] Shariff, Azim F., and Ara Norenzayan. "God is watching you: Priming God concepts increases prosocial behavior in an anonymous economic game." Psychological Science vol. 18,9 (2007): 803-809. doi:10.1111/j.1467-9280.2007.01983.x
    [4] Norenzayan, Ara. Big Gods: How Religion Transformed Cooperation and Conflict. Princeton University Press, 2013.
    [5] Durkheim, Emile. The Elementary Forms of the Religious Life. 1912. Translated by Joseph Ward Swain, George Allen & Unwin, 1915.
    [6] Foucault, Michel. Discipline and Punish: The Birth of the Prison. 1975. Translated by Alan Sheridan, Vintage Books, 1977.
    [7] Vail, Kenneth E., et al. "A terror management analysis of the psychological functions of religion." Personality and Social Psychology Review vol. 14,1 (2010): 84-94. doi:10.1177/1088868309351165`,
    content: [],
    references: [
      {
        label:
          '[1] Barrett, Justin L. "Exploring the natural foundations of religion."; Guthrie, Stewart E. Faces in the Clouds.',
        href: 'https://doi.org/10.1016/S1364-6613(99)01419-9',
      },
      {
        label: '[2] Bateson, Melissa, Daniel Nettle, and Gilbert Roberts. "Cues of being watched enhance cooperation in a real-world setting."',
        href: 'https://doi.org/10.1098/rsbl.2006.0509',
      },
      {
        label:
          '[3] Shariff, Azim F., and Ara Norenzayan. "God is watching you: Priming God concepts increases prosocial behavior in an anonymous economic game."',
        href: 'https://doi.org/10.1111/j.1467-9280.2007.01983.x',
      },
      {
        label: '[4] Norenzayan, Ara. Big Gods: How Religion Transformed Cooperation and Conflict.',
        href: 'https://press.princeton.edu/books/hardcover/9780691151168/big-gods',
      },
      {
        label: '[5] Durkheim, Emile. The Elementary Forms of the Religious Life.',
        href: 'https://archive.org/details/elementaryformso00durk',
      },
      {
        label: '[6] Foucault, Michel. Discipline and Punish: The Birth of the Prison.',
        href: 'https://en.wikipedia.org/wiki/Discipline_and_Punish',
      },
      {
        label: '[7] Vail, Kenneth E., et al. "A terror management analysis of the psychological functions of religion."',
        href: 'https://doi.org/10.1177/1088868309351165',
      },
    ],
  },
  {
    slug: 'school-is-a-broken-loss-function',
    title: 'School is a Broken Loss Function',
    description: 'why school optimizes for visible compliance instead of durable learning.',
    rawContent: `Every system that trains behavior trains it against a loss function. In machine learning, the loss function is the thing you are minimizing; in life, it's whatever signal tells you that you did badly. The quality of the training depends almost entirely on the quality of that signal. A good loss function is honest, immediate, and resistant to being gamed. A bad one rewards whatever correlates with the real goal cheaply enough to fake. Most of what is called "discipline" or "executive functioning" in high school is actually the shape of a mind trained against a bad loss function for a decade, and the shape is worse than the absence.

This is not a personal complaint about school. It's a claim about what measurement does to the thing being measured, and what that does, in turn, to the students being shaped by the measurement.

goodhart, campbell, and the classroom

Donald Campbell stated it cleanly in 1976: "the more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor." [1] Marilyn Strathern reformulated it a generation later: "when a measure becomes a target, it ceases to be a good measure." [2] The example both authors kept returning to was education. Tests, grades, class rank, GPA. A proxy for learning becomes the thing being optimized, and the underlying learning it was supposed to measure drifts away from it.

What this means in practice is that every hour a student spends on school is an hour spent optimizing a proxy that the institution itself knows has been corrupted. The cheating data confirms it. A Rutgers survey of 24,000 students across 70 U.S. high schools found that 95% admitted to some form of academic dishonesty, 64% specifically on tests, 58% on plagiarism. [3] A loss function that 95% of participants route around is not measuring work ethic. It is measuring something else, probably willingness to perform the ritual, and it is doing it badly.

executive functioning is training for the proxy

The cognitive science meaning of executive functioning, planning, working memory, inhibition, is real and worth having. [4] The thing marketed to high schoolers under that name is different. It is a bundle of compliance behaviors: keep the planner, check the LMS, break the task into subtasks, start early, meet the rubric. These behaviors are framed as discipline, but mechanically they are proxy-optimization. They are the shape your attention takes when you have accepted the measured thing as the real thing.

Self-determination theory has been measuring the cost of this for decades. Deci and Ryan's work across hundreds of studies shows that external controls, grades, rewards, punishments, surveillance, tend to undermine the intrinsic motivation that actually predicts long-run achievement. Autonomy, competence, and relatedness are the conditions under which motivation internalizes; pressure toward a controlled metric is the condition under which it doesn't. [5] The more elaborate the executive-functioning scaffolding around an assignment, the stronger the signal that the assignment cannot survive on its own merit, and students pick up on that signal even when they can't articulate it.

So "good executive functioning," in the school sense, is often a marker of Goodhart's law working on a person. It is what compliance looks like when it is running smoothly.

procrastination is a symptom of a working detector

This is where procrastination comes in, and why the standard framing of it as a character defect is wrong in a specific way.

Chu and Choi, in a 2005 paper in the Journal of Social Psychology, separated procrastinators into two groups. Passive procrastinators freeze, miss deadlines, and underperform. Active procrastinators delay deliberately, prefer working under pressure, and across measures of time use, self-efficacy, and academic outcomes look more like non-procrastinators than like the passive kind. [6] The behavior is identical from the outside. The internal structure is not.

The simplest read of that result, and the one that fits the loss-function frame, is that active procrastinators have a functioning detector for proxy work. Given a task whose real importance is much lower than its assigned importance, the correct response is to discount it, let the deadline do the compression, and then execute under the pressure. The Yerkes-Dodson literature going back to 1908 supports the execution half of this: for well-practiced tasks, higher arousal improves performance, and focus gets cheaper near a deadline because the opportunity cost of distraction collapses. [7] The detection half is just a calibrated student noticing that the proxy is a proxy.

This is distinct from the failure mode. Freezing, avoidance, missing deadlines, lying to yourself about the work, those are real pathologies and they do track with bad outcomes. The defense here is narrow. It is that the specific move of recognizing low-value proxy work, deferring it, and collapsing it into the minimum real effort it deserves is not a failure of executive functioning. It is executive functioning pointing at the right target.

honest loss functions

The contrast worth drawing is with domains where the loss function can't be gamed.

A barbell does not care about your planner. Either the weight goes up or it doesn't, and the feedback is immediate and physical. A wrestling match does not care whether you looked disciplined in practice; if you coasted, you end up on your back against someone who didn't. Code does not care how organized your notes are; it either compiles and produces the output or it doesn't, and the error messages are indifferent to your self-image. These domains are hard in a way that school often is not, and the difference is structural, not a matter of effort. The loss function is honest. You cannot optimize the proxy without also moving the underlying thing, because there is no proxy.

Discipline built against an honest loss function is durable. Discipline built against a gameable one is, almost by definition, a set of habits for gaming. This is why the correlation between "organized student" and "capable adult" is much weaker than the school version of executive functioning predicts. The students who look most disciplined in a high school are, some of the time, the ones who have most completely internalized a corrupted metric.

what to concede

I don't want to overstate this. There are things school measures that track something real. Basic literacy, numeracy, the ability to sit with a hard text long enough to understand it, the ability to produce coherent writing under constraints. Those are worth having, and the measurement of them is noisy but not fake. There are also teachers and classes where the loss function is close to honest, usually because a single person is holding it up against institutional pressure to flatten everything into a rubric.

The argument is not that school is worthless. It is that the specific thing being sold as executive functioning, the planner culture and the productivity scaffolding, is training against the wrong signal, and that the students who partially opt out of it, by procrastinating the busywork and spending the saved attention on work whose loss function pushes back, are often the ones whose minds are calibrated correctly.

the uncomfortable part

If Campbell and Strathern are right, then the cleanest diagnostic for whether a system is training something real is whether it can be gamed. School, by its own 95% admission rate, can be. Gyms, mats, and compilers can't, or at least not in the same way. A mind that notices this and redistributes its attention accordingly is not undisciplined. It is doing the one thing an optimizer is supposed to do, which is refusing to spend more on a proxy than the proxy is worth.

The quiet version of this is what most functional adults figure out eventually: do enough to clear the gradable bar, and spend the rest of your finite attention on work that can push back. The loud version, the planner, the color-coded Google Calendar, the performance of being on top of things, is not the opposite of laziness. It is the shape a mind takes when it has stopped asking whether the measurement is real.

Sources:

    [1] Campbell, Donald T. "Assessing the Impact of Planned Social Change." Occasional Paper Series, Public Affairs Center, Dartmouth College, 1976. Reprinted in Evaluation and Program Planning vol. 2,1 (1979): 67-90. Wikipedia summary
    [2] Strathern, Marilyn. "'Improving ratings': audit in the British University system." European Review vol. 5,3 (1997): 305-321. PDF
    [3] McCabe, Donald L. "Cheating: Why Students Do It and How We Can Help Them Stop." American Educator, Winter 2001. Survey of 24,000 students at 70 U.S. high schools. AFT
    [4] Diamond, Adele. "Executive functions." Annual Review of Psychology vol. 64 (2013): 135-168. doi:10.1146/annurev-psych-113011-143750
    [5] Ryan, Richard M., and Edward L. Deci. "Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being." American Psychologist vol. 55,1 (2000): 68-78. PDF
    [6] Chu, Angela Hsin Chun, and Jin Nam Choi. "Rethinking procrastination: positive effects of 'active' procrastination behavior on attitudes and performance." The Journal of Social Psychology vol. 145,3 (2005): 245-64. doi:10.3200/SOCP.145.3.245-264
    [7] Yerkes, Robert M., and John D. Dodson. "The relation of strength of stimulus to rapidity of habit-formation." Journal of Comparative Neurology and Psychology vol. 18 (1908): 459-482.`,
    content: [],
    references: [
      {
        label: '[1] Campbell, Donald T. "Assessing the Impact of Planned Social Change."',
        href: 'https://en.wikipedia.org/wiki/Campbell%27s_law',
      },
      {
        label: "[2] Strathern, Marilyn. \"'Improving ratings': audit in the British University system.\"",
        href: 'https://doi.org/10.1002/(SICI)1234-981X(199707)5:3%3C305::AID-EURO184%3E3.0.CO;2-4',
      },
      {
        label: '[3] McCabe, Donald L. "Cheating: Why Students Do It and How We Can Help Them Stop."',
        href: 'https://www.aft.org/ae/winter2001/mccabe',
      },
      {
        label: '[4] Diamond, Adele. "Executive functions."',
        href: 'https://doi.org/10.1146/annurev-psych-113011-143750',
      },
      {
        label:
          '[5] Ryan, Richard M., and Edward L. Deci. "Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being."',
        href: 'https://doi.org/10.1037/0003-066X.55.1.68',
      },
      {
        label:
          "[6] Chu, Angela Hsin Chun, and Jin Nam Choi. \"Rethinking procrastination: positive effects of 'active' procrastination behavior on attitudes and performance.\"",
        href: 'https://doi.org/10.3200/SOCP.145.3.245-264',
      },
      {
        label:
          '[7] Yerkes, Robert M., and John D. Dodson. "The relation of strength of stimulus to rapidity of habit-formation."',
        href: 'https://psychclassics.yorku.ca/Yerkes/Law/',
      },
    ],
  },
]
