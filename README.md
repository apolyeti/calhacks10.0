# Let It Out - FRONTEND

Project for CalHacks 10.0

## Inspiration

Understanding and expressing emotions can be a complex and challenging journey. Many people struggle to connect and identify with their feelings, which can be overwhelming and confusing. Let It Out was born from the desire to create a supportive space where users can explore and engage with their emotions, fostering self-awareness and personal growth. Whether Let It Out is used as a safe place to vent, to recount good memories, or to explore sources of anxiety, Let It Out is here to support users with any emotion they may be experiencing.

## What it does

The user is first prompted to record a vocal burst, to attempt to express their emotions in a purely primitive and natural way. Even when the user isn’t sure what emotion lies at the source of this vocal expression, with the power of Hume AI, Let It Out analyzes the user’s expression, and identifies an emotion present in the user. The user is then routed to a personalized journal prompt and template, designed to guide the user through a short session of self discovery, compassion, and reflection. The user is able to view an analysis past entries in their journal from ChatGPT which provides insights about the user’s emotional experiences across the dates they have journaled.

## How we built it

Let It Out is a full stack web app. The front end is built with Next.js, Typescript, Chakra UI, and TinyMCE API for the custom journaling templates and embedded text editor. The back end is built with Python and Flask, which connects to Hume AI’s Streaming API to analyze the user’s vocal burst, OpenAI’s ChatGPT API to analyze the user’s journals, and MongoDB to integrate user authentication and store the user’s journals for future reflection.

## Challenges we ran into

The main challenges we ran into came in our first project idea, in which we faced API paywalls and a lack of ideas to go forward with. However after attending Hume’s workshop we made a quick transition into this project and adapted well. We also ran into issues with slow run times which we greatly lessened by integrating Hume’s Streaming API rather than Batch API, and optimizing other aspects of our application.

## Accomplishments we’re proud of

We are proud of how full the project turned out, at first it felt vague and without much direction, but as we continued to develop this project, new ideas were formed and we managed to reach something fairly well-rounded.

## What we learned

We learned how to integrate modern technologies into our projects to create a rich and complex application. Our beginner hacker learned how fun it can be to work in a team in a fast-paced environment like a hackathon.

## What’s next for Let It Out

We want to improve the journal analysis ability of our application by incorporating some kind of emotionally intelligent model rather than just base ChatGPT, we think we can do this by creating a custom model with Hume that would provide the summarization and analysis tools of ChatGPT but also include the emotional intelligence of Hume’s models.

## BACKEND

Here's the link for the [backend repo](https://github.com/waylonwilliams/letitout_backend)
