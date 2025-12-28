import { useMemo } from "react";
import CheckoutForm from "../../components/CheckoutForm";
import type { Program } from "../../types/program";
import { programs } from "../../data/programs";

// images used in Services cards (match slugs from services.tsx)
import virtualImg from "../../components/images/virtual.jpg";
import socialImg from "../../components/images/socialman.jpg";
import creativeImg from "../../components/images/creative.jpg";
import frontendImg from "../../components/images/webdev.jpg";
import marketingImg from "../../components/images/marketing.jpg";
import mastersImg from "../../components/images/masters.jpg";

import "../checkout.css";

interface CheckoutPageProps {
  params: {
    slug: string;
  };
}

function parseHashQuery() {
  const hash = window.location.hash.replace(/^#\/?/, ""); // "checkout/slug?..."
  const qIndex = hash.indexOf("?");
  if (qIndex === -1) return new URLSearchParams();
  return new URLSearchParams(hash.slice(qIndex + 1));
}

function imageForSlug(slug?: string) {
  if (!slug) return undefined;
  const map: Record<string, string> = {
    "virtual-assistant": virtualImg,
    "social-media-assistant": socialImg,
    "creative-va": creativeImg,
    "technical-va": frontendImg,
    "digital-marketing-va": marketingImg,
    "va-masterclass": mastersImg,
  };
  return map[slug];
}

export default function CheckoutPage({ params }: CheckoutPageProps) {
  const query =
    typeof window !== "undefined" ? parseHashQuery() : new URLSearchParams();
  const programFromData = programs.find((p) => p.slug === params.slug);

  const program: Program = useMemo(() => {
    const title = query.get("title");
    if (title) {
      return {
        slug: query.get("slug") || params.slug,
        title,
        description: query.get("description") || "",
        duration: query.get("duration") || "",
        overview: JSON.parse(query.get("overview") || "[]").join("\n"),
        price: Number(query.get("price")) || programFromData?.price || 0,
      } as Program;
    }
    if (programFromData) return programFromData;
    return {
      overview: "—",
      slug: params.slug,
      title: "Selected Program",
      description: "No detailed description provided.",
      duration: "—",
      price: 0,
    } as Program;
  }, [params.slug]);

  const image = imageForSlug(params.slug) ?? imageForSlug(program.slug);

  return (
    <main className="checkout-page">
      <div className="checkout-grid">
        <section className="summary-card">
          {image && (
            <img src={image} alt={program.title} className="summary-image" />
          )}
          <h1 className="summary-title">{program.title}</h1>
          <p className="summary-desc">{program.description}</p>

          {program.overview && (
            <div>
              <h3 className="h3">Course Overview</h3>
                <div className="overview-list">
                  {program.overview
                    .split(/\r?\n/)
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                </div>
            </div>
          )}

          <div className="summary-details">
            <div className="detail-row">
              <span className="muted">Duration</span>
              <strong className="dur">{program.duration}</strong>
            </div>
            <div className="detail-row">
              <span className="muted">Price</span>
              <strong className="price-badge">
                ₦{program.price.toLocaleString()}
              </strong>
            </div>
          </div>

          <div className="note">
            You are about to enroll in <strong>{program.title}</strong>. Confirm
            your details on the right and proceed to secure payment.
          </div>

          <a className="btn btn-outline-secondary mt-3" href="#/services">
            ← Back to services
          </a>
        </section>

        <aside className="checkout-aside">
          <div className="checkout-form-card">
            <CheckoutForm program={program} />
          </div>
        </aside>
      </div>
    </main>
  );
}
