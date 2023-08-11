// import React from "react";

// const HelpSection = () => {
//   return (
//     <div className="bg-gray-100 p-8">
//       <h2 className="text-4xl font-bold text-indigo-700 mb-8">
//         Frequently Asked Questions
//       </h2>
//       <div className="faq mb-8">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//           How do I book a flight?
//         </h3>
//         <p className="text-gray-600">To book a flight, follow these steps...</p>
//       </div>
//       <div className="faq mb-8">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//           What is the baggage policy?
//         </h3>
//         <p className="text-gray-600">
//           Our baggage policy includes details about...
//         </p>
//       </div>
//       {/* Add more FAQs here */}

//       <h2 className="text-4xl font-bold text-indigo-700 mb-8">
//         Contact Information
//       </h2>
//       <p className="text-gray-600 mb-4">
//         If you need assistance, feel free to contact us:
//       </p>
//       <ul className="list-disc pl-6 mb-8">
//         <li className="text-gray-700">
//           Email:{" "}
//           <a
//             href="mailto:support@example.com"
//             className="text-blue-500 hover:underline"
//           >
//             support@example.com
//           </a>
//         </li>
//         <li className="text-gray-700">Phone: 123-456-7890</li>
//       </ul>

//       {/* Add more contact information here */}

//       {/* Include other sections as mentioned in the previous response */}
//     </div>
//   );
// };

// export default HelpSection;

import React from "react";

const HelpSection = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="faq mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          How do I book a flight?
        </h3>
        <p className="text-gray-600">To book a flight, follow these steps...</p>
      </div>
      <div className="faq mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          What is the baggage policy?
        </h3>
        <p className="text-gray-600">
          Our baggage policy includes details about...
        </p>
      </div>
      {/* Add more FAQs here */}

      <h2 className="text-4xl font-bold text-indigo-700 mb-8">
        Contact Information
      </h2>
      <p className="text-gray-600 mb-4">
        If you need assistance, feel free to contact us:
      </p>
      <ul className="list-disc pl-6 mb-8">
        <li className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-500 hover:underline"
          >
            support@example.com
          </a>
        </li>
        <li className="text-gray-700">Phone: 123-456-7890</li>
      </ul>

      <h2 className="text-4xl font-bold text-indigo-700 mb-8">
        Booking Changes and Cancellations
      </h2>
      <p className="text-gray-600 mb-4">
        Learn about our booking modification and cancellation policies:
      </p>
      <ul className="list-disc pl-6 mb-8">
        <li className="text-gray-700">
          For changing a booking, visit your account dashboard.
        </li>
        <li className="text-gray-700">
          To cancel a booking, contact our customer support.
        </li>
      </ul>

      {/* Include other sections as needed */}
    </div>
  );
};

export default HelpSection;
