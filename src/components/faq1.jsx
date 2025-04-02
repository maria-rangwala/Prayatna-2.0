import React from "react";
import './faq.css';

const faqData = [
  {
    question: "How do I register for the Prayatna Hackathon?",
    answer: "To register, interested participants should navigate to Unstop and complete the registration process and pay the registration fees. It is crucial for each team to appoint a team leader responsible for the registration of all team members. Teams that fail to complete the registration process will not be considered for participation.",
  },
  {
    question: "How will results of Round 1 be communicated?",
    answer:
      "Results will be emailed to team leader, with a reporting form for selected teams outlining next steps.",
  },
  {
    question: "Can I attend Prayatna 2.0 virtually?",
    answer:
      "Prayatna 2.0 unfolds 2 phases... An online round (ppt submission), The selected teams of Round 1 will get the chance to attend in-person (offline round) hackathon of 36 hours at AITR Premises, Indore.",
  },
  {
    question: "What is the registration fee?",
    answer:
      "There is a registration fee of Rs 250 for the entire team(not for individual members).",
  },
  {
    question: "Will accommodation be provided and what amenities are included?",
    answer:
      "Accommodation will be provided from our side.These facilities include essential amenities such as sleeping arrangements, restroom facilities, and common areas for relaxation. Security of the participants will not be compromised.",
  },
  {
    question: "Whom should I contact for queries?",
    answer:
      "For questions, mail us at below given email or through given phone number.",
  },
];

function Faqq() {
  return (
    <div id="faqs" className="bg-black bg-opacity-80 border-4 border-yellow-600 rounded-[8px] max-w-6xl p-8 sm:p-10 lg:p-12">
      <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <details key={index} className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 rounded-lg bg-gray-900 p-4 hover:bg-gray-800 transition-all duration-300" style={{'color': '#f59e0b'}}>
              <h2>{faq.question}</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 px-4" >{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default Faqq;