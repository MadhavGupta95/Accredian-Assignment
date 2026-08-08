"use client";

import ky from "ky";
import { useState } from "react";

enum Domain {
  product_management = "Product Management",
  cfo = "CFO",
  data_science = "Data Science",
  artificial_intelligence = "Artificial Intelligence",
  human_resource = "Human Resource",
  strategy_leadership = "Strategy & Leadership",
  general_management = "General Management",
  digital_transformation = "Digital Transformation",
  business_management = "Business Management",
  finance = "Finance",
  project_management = "Project Management",
  senior_management = "Senior Management",
}

enum Mode {
  online = "online",
  offline = "offline",
}

interface FormType {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: Domain | "";
  candidates: string;
  delivery: Mode | "";
  location: string;
}

export function EnquiryForm() {
  const [formVal, setFormVal] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    delivery: "",
    location: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await ky.post("/api", {
      json: formVal,
    });
  };

  return (
    <div className="w-full max-w-md md:max-w-lg p-6 md:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          id="name"
          type="text"
          placeholder="Enter Name"
          className="border-b border-gray-300 focus:outline-none focus:border-blue-600 py-2 placeholder:text-gray-500"
          onChange={(e) => setFormVal({ ...formVal, name: e.target.value })}
          value={formVal.name}
        />

        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          className="border-b border-gray-300 focus:outline-none focus:border-blue-600 py-2 placeholder:text-gray-500"
          onChange={(e) => setFormVal({ ...formVal, email: e.target.value })}
          value={formVal.email}
        />

        <div className="flex items-center gap-2 border-b border-gray-300 py-2">
          <span>🇮🇳</span>
          <span className="text-blue-600">▾</span>
          <span className="text-gray-700">+91</span>

          <input
            id="phone"
            type="tel"
            placeholder="Phone number"
            className="flex-1 min-w-0 focus:outline-none placeholder:text-gray-500"
            onChange={(e) => setFormVal({ ...formVal, phone: e.target.value })}
            value={formVal.phone}
          />
        </div>

        <input
          id="company"
          type="text"
          placeholder="Enter company name"
          className="border-b border-gray-300 focus:outline-none focus:border-blue-600 py-2 placeholder:text-gray-500"
          onChange={(e) => setFormVal({ ...formVal, company: e.target.value })}
          value={formVal.company}
        />

        <select
          id="domain"
          className="border-b border-gray-300 focus:outline-none py-2 text-gray-500 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22gray%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-right"
          onChange={(e) =>
            setFormVal({ ...formVal, domain: e.target.value as Domain })
          }
          value={formVal.domain}
        >
          <option value="" disabled>
            Select Domain
          </option>
          <option value={Domain.product_management}>Product Management</option>
          <option value={Domain.cfo}>CFO</option>
          <option value={Domain.data_science}>Data Science</option>
          <option value={Domain.artificial_intelligence}>
            Artificial Intelligence
          </option>
          <option value={Domain.human_resource}>Human Resource</option>
          <option value={Domain.strategy_leadership}>
            Strategy & Leadership
          </option>
          <option value={Domain.general_management}>General Management</option>
          <option value={Domain.digital_transformation}>
            Digital Transformation
          </option>
          <option value={Domain.business_management}>
            Business Management
          </option>
          <option value={Domain.finance}>Finance</option>
          <option value={Domain.project_management}>Project Management</option>
          <option value={Domain.senior_management}>Senior Management</option>
        </select>

        <input
          id="candidates"
          type="number"
          placeholder="Enter No. of candidates"
          className="border-b border-gray-300 focus:outline-none focus:border-blue-600 py-2 placeholder:text-gray-500"
          onChange={(e) =>
            setFormVal({ ...formVal, candidates: e.target.value })
          }
          value={formVal.candidates}
        />

        <select
          id="delivery"
          className="border-b border-gray-300 focus:outline-none py-2 text-gray-500 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22gray%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-right"
          onChange={(e) =>
            setFormVal({ ...formVal, delivery: e.target.value as Mode })
          }
          value={formVal.delivery}
        >
          <option value="" disabled>
            Select Mode of Delivery *
          </option>
          <option value={Mode.online}>Online</option>
          <option value={Mode.offline}>Offline</option>
        </select>

        <input
          id="location"
          type="text"
          placeholder="Eg: Gurgoan, Delhi, India"
          className="border-b border-gray-300 focus:outline-none focus:border-blue-600 py-2 placeholder:text-gray-500"
          onChange={(e) => setFormVal({ ...formVal, location: e.target.value })}
          value={formVal.location}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
