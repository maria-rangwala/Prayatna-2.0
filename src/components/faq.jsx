import React from "react";
import './faq.css';

function Faq() {
    const toggleFAQ = (id) => {
        const content = document.getElementById(id);
        const card = content.closest(".faq-card");
        const allContent = document.querySelectorAll(".faq-content");
        const allCards = document.querySelectorAll(".faq-card");
    
        allContent.forEach((item) => {
          if (item.id !== id) item.classList.add("hidden");
        });
    
        allCards.forEach((item) => {
          item.classList.remove("open");
          item.style.backgroundImage = "";
        });
    
        content.classList.toggle("hidden");
        if (!content.classList.contains("hidden")) {
          card.classList.add("open");
          card.style.backgroundImage = card.getAttribute("data-bg");
        }
      };
    return (
        <div id='faqs' className="bg-black bg-opacity-75 border-4 sm:border-2 lg:border-4 border-yellow-600 rounded-[8px] sm:p-8 lg:p-12 w-full max-w-6xl shadow-lg p-6 faqs" style={{'marginTop': '30px','marginBottom':'30px'}}>
            <h1 className="text-3xl font-bold text-center mb-16 he" style={{'color': '#f59e0b'}}>Frequently Asked Questions</h1>
            <div className="flex flex-col md:flex-row gap-4">
                {[
                    { question: "Can I attend Prayatna 2.0 virtually?", answer: "Prayatna 2.0 unfolds 2 phases... An online round (ppt submission) & an in-person offline hackathon of 36 hours...", icon: "⚓" },
                    { question: "What is the participation fee?", answer: "The participation fee is Rs 250...", icon: "💰" },
                    { question: "How can I register for Prayatna Hackathon?", answer: "To register, interested participants should navigate to Unstop and complete the registration process. It is crucial for each team to appoint a team leader responsible for the registration of all team members. Teams that fail to complete the registration process will not be considered for participation....", icon: "⚔" },
                    { question: "Will accommodation be provided and what amenities are included?", answer: "Accommodation will be provided from our side.These facilities include essential amenities such as sleeping arrangements, restroom facilities, and common areas for relaxation. Security of the participants will not be compromised....", icon: "🧭" },
                ].map((faq, index) => (
                    <div key={index} className="faq-card flex-1 border border-yellow-600 rounded-lg shadow" data-bg="url('./assets/image/piratecove.jpg')">
                        <div className="p-4">
                            <button className="w-full text-left py-4 px-2 flex justify-between items-center button1" onClick={() => toggleFAQ(`faq${index}`)}>
                                <span>{faq.question}</span>
                                <span className="icon">{faq.icon}</span>
                            </button>
                            <div id={`faq${index}`} className="faq-content hidden px-4 pb-4">
                                <p className="para">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default Faq;