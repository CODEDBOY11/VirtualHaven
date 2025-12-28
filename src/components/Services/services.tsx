import "./services.css";
import virtual from "../images/virtual.jpg";
import creative from "../images/creative.jpg";
import marketing from "../images/marketing.jpg";
import masters from "../images/masters.jpg";
import frontend from "../images/webdev.jpg";
import social from "../images/socialman.jpg";
import type { Program } from "../../types/program";
import { programs } from "../../data/programs";

interface CardItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  img: string;
  slug?: string;
  overview: string[];
}

interface Props {
  program?: Program;
}

const Services = ({ program }: Props) => {
  const featured =
    program ?? (programs && programs.length > 0 ? programs[0] : undefined);

  const cardItems: CardItem[] = [
    {
      id: "virtual",
      title: "Virtual Assistant",
      description:
        "Learn essential administrative, project management, and client acquisition skills to start your career as a professional virtual assistant.",
      duration: "6 Weeks",
      overview: [
        "Introduction to Virtual Assistance",
        "Role and Responsibilities of a Virtual Assistant",
        "Essential Administrative Skills for Virtual Assistants",
        "Time Management and Productivity Tools",
        "Project Management Software for Virtual Assistants (Trello, Asana, etc.)",
        "Data Entry Techniques and Tools (Excel, Google Sheets)",
        "Client Acquisition Strategies for Virtual Assistants",
        "Contracting and Proposal Writing for VA Work",
      ],
      price: 50000,
      img: virtual,
      slug: featured?.slug ?? "virtual-assistant",
    },
    {
      id: "social",
      title: "Social Media Assistant",
      description:
        "Master social media management, content creation, engagement, and analytics.",
      duration: "6 Weeks",
      overview: [
        "Introduction to Virtual Assistance",
        "Role and Responsibilities of a Virtual Assistant",
        "Essential Administrative Skills for Virtual Assistants",
        "Time Management and Productivity Tools",
        "Project Management Software for Virtual Assistants (Trello, Asana, etc.)",
        "Data Entry Techniques and Tools (Excel, Google Sheets)",
        "Client Acquisition Strategies for Virtual Assistants",
        "Contracting and Proposal Writing for VA Work",
      ],
      price: 40000,
      img: social,
      slug: featured?.slug ?? "social-media-assistant",
    },
    {
      id: "creative",
      title: "Creative Virtual Assistant",
      overview: [
        "Introduction to Creative Virtual Assistance",
        "Role and Responsibilities of a Creative Virtual Assistant",
        "Essential Design Skills for Creative VAs",
        "Time Management and Productivity Tools for Creative VAs",
        "Project Management Software for Creative VAs (Trello, Asana, etc.)",
        "Canva and Graphic Design Fundamentals",
        "Client Acquisition Strategies for Creative VAs",
        "Contracting and Proposal Writing for VA Work",
      ],
      description:
        "Build in-demand Canva and graphic design skills to create branded visuals.",
      duration: "4 Weeks",
      price: 35000,
      img: creative,
      slug: "creative-va",
    },
    {
      id: "technical",
      title: "Technical Virtual Assistant",
      description:
        "Learn website management, basic web design, SEO fundamentals, and analytics.",
      duration: "8 Weeks",
      overview: [
        "Introduction to Virtual Assistance",
        "Role and Responsibilities of a Virtual Assistant",
        "Essential Administrative Skills for Virtual Assistants",
        "Time Management and Productivity Tools",
        "Project Management Software for Virtual Assistants (Trello, Asana, etc.)",
        "Data Entry Techniques and Tools (Excel, Google Sheets)",
        "Client Acquisition Strategies for Virtual Assistants",
        "Contracting and Proposal Writing for VA Work",
      ],
      price: 60000,
      img: frontend,
      slug: "technical-va",
    },
    {
      id: "marketing",
      title: "Digital Marketing Assistant",
      description:
        "Develop practical digital marketing skills including SEO, emails and ads.",
      duration: "6 Weeks",
      overview: [
        "Introduction to Virtual Assistance",
        "Role and Responsibilities of a Virtual Assistant",
        "Essential Administrative Skills for Virtual Assistants",
        "Time Management and Productivity Tools",
        "Project Management Software for Virtual Assistants (Trello, Asana, etc.)",
        "Data Entry Techniques and Tools (Excel, Google Sheets)",
        "Client Acquisition Strategies for Virtual Assistants",
        "Contracting and Proposal Writing for VA Work",
      ],
      price: 55000,
      img: marketing,
      slug: "digital-marketing-va",
    },
    {
      id: "masters",
      title: "VA Master Class",
      description:
        "An all-in-one masterclass combining admin, creative, technical, and marketing skills.",
      duration: "12 Weeks",
      overview: [
        "Introduction to Virtual Assistance",
        "Role and Responsibilities of a Virtual Assistant",
        "Essential Administrative Skills for Virtual Assistants",
        "Time Management and Productivity Tools",
        "Project Management Software for Virtual Assistants (Trello, Asana, etc.)",
        "Data Entry Techniques and Tools (Excel, Google Sheets)",
        "Client Acquisition Strategies for Virtual Assistants",
        "Contracting and Proposal Writing for VA Work",
      ],
      price: 120000,
      img: masters,
      slug: "va-masterclass",
    },
  ];

  const checkoutHref = (item: CardItem) => {
    const params = new URLSearchParams({
      title: item.title,
      description: item.description,
      duration: item.duration,
      price: String(item.price),
      slug: item.slug ?? item.id,
      overview: JSON.stringify(item.overview),
    });
    return `#/checkout/${encodeURIComponent(
      item.slug ?? item.id
    )}?${params.toString()}`;
  };

  return (
    <div
      className="cards"
      style={{ display: "flex", flexWrap: "wrap", gap: 20 }}
    >
      {cardItems.map((item) => (
        <div
          key={item.id}
          className="card"
          style={{ width: "18rem", margin: "20px" }}
        >
          <img
            src={item.img}
            className="card-img-top img-custom"
            alt={item.title}
          />
          <div className="card-body">
            <h4 className="card-title">{item.title}</h4>
            <p className="card-text">{item.description}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <small className="text-muted">{item.duration}</small>
              <strong className="price">₦{item.price.toLocaleString()}</strong>
            </div>
            <a
              href={checkoutHref(item)}
              className="btn course-details"
              style={{
                marginTop: 10,
                display: "inline-block",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Enroll
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
