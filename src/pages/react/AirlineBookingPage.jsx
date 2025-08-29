import React from "react";

function AirlineBookingPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        ✈️ Airline Booking Systems: GDS, Non-GDS, LCC, Non-LCC & IATA
      </h1>

      {/* GDS */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          🌍 GDS (Global Distribution System)
        </h2>
        <p className="mb-2">
          A <b>worldwide computer network</b> that connects airlines, travel
          agents, hotels, and car rentals. Examples:{" "}
          <b>Amadeus, Sabre, Travelport</b>.
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            Agents can search flights, fares, and availability in real time.
          </li>
          <li>
            Used by travel agencies, OTAs (Expedia, MakeMyTrip), and corporates.
          </li>
          <li>
            Acts as a <b>middleman</b> between airlines and agents.
          </li>
        </ul>
        <p className="mb-2">
          <b>Example:</b> A travel agent searches flights on Amadeus and
          instantly books a Lufthansa ticket.
        </p>
      </section>

      {/* Non-GDS */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          🌍 Non-GDS
        </h2>
        <p className="mb-2">
          Booking flights <b>directly</b> from airline channels without a GDS.
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Airline websites, apps, or call centers.</li>
          <li>Some airlines use API connections with OTAs instead of GDS.</li>
          <li>
            Popular with <b>LCCs (Low-Cost Carriers)</b> who avoid GDS fees.
          </li>
        </ul>
        <p className="mb-2">
          <b>Example:</b> Booking directly on Ryanair.com without any GDS.
        </p>
      </section>

      {/* Key Difference */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-green-700 mb-3">
          🔑 Key Difference
        </h2>
        <p className="mb-2">
          <b>GDS</b> = Middleman system with many airlines + agents in one
          place. <br />
          <b>Non-GDS</b> = Direct booking via airline websites/apps.
        </p>
      </section>

      {/* LCC vs Non-LCC */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          🛫 LCC vs Non-LCC Airlines
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          🔹 LCC (Low-Cost Carrier)
        </h3>
        <ul className="list-disc list-inside mb-2">
          <li>Budget airlines, no-frills service (meals/baggage extra).</li>
          <li>Point-to-point routes.</li>
          <li>Avoid GDS → sell mainly via websites/apps.</li>
        </ul>
        <p className="mb-2">
          <b>Examples:</b> Ryanair, AirAsia, IndiGo.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          🔹 Non-LCC (Full-Service Carrier)
        </h3>
        <ul className="list-disc list-inside mb-2">
          <li>
            Traditional airlines with full service (meals, baggage, lounges).
          </li>
          <li>Hub-and-spoke flight model.</li>
          <li>Rely heavily on GDS for global reach.</li>
        </ul>
        <p className="mb-2">
          <b>Examples:</b> Emirates, Lufthansa, Singapore Airlines.
        </p>
      </section>

      {/* Relationship */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-green-700 mb-3">
          🔗 LCC & Non-LCC with GDS / Non-GDS
        </h2>
        <table className="table-auto border border-gray-300 mb-3">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Airline Type</th>
              <th className="px-4 py-2 border">Typical Booking Method</th>
              <th className="px-4 py-2 border">Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">LCC + Non-GDS</td>
              <td className="border px-4 py-2">Direct website/app</td>
              <td className="border px-4 py-2">Avoid GDS fees</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Non-LCC + GDS</td>
              <td className="border px-4 py-2">Amadeus, Sabre, etc.</td>
              <td className="border px-4 py-2">
                Needed for corporates & agencies
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">LCC + GDS</td>
              <td className="border px-4 py-2">Rare, some LCCs</td>
              <td className="border px-4 py-2">To reach business travelers</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Non-LCC + Non-GDS</td>
              <td className="border px-4 py-2">Also sell direct</td>
              <td className="border px-4 py-2">
                But still rely on GDS globally
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* IATA Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">🌍 IATA</h2>
        <p className="mb-2">
          <b>IATA = International Air Transport Association</b>, a global trade
          body for airlines. They set industry standards (like airport/airline
          codes) and manage the <b>BSP (Billing and Settlement Plan)</b>.
        </p>
        <h3 className="text-lg font-semibold mb-2">✈️ Why IATA is Needed</h3>
        <ul className="list-disc list-inside mb-2">
          <li>
            Without IATA, you can search flights in GDS but not issue tickets.
          </li>
          <li>IATA ensures airlines get paid securely through BSP.</li>
          <li>
            Only IATA-accredited agents (or consolidators) can issue tickets.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">
          🛒 How Booking Works with IATA
        </h3>
        <ol className="list-decimal list-inside mb-2">
          <li>User searches & books flight on your site (via Amadeus).</li>
          <li>PNR is created in GDS.</li>
          <li>Your system requests ticket issuance via IATA’s BSP.</li>
          <li>Airline issues e-ticket; IATA manages payment flow.</li>
        </ol>
        <p className="mb-2">
          <b>In short:</b>{" "}
          <i>
            Amadeus = technology (search & book). IATA = license + money system
            to issue tickets.
          </i>
        </p>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-xl font-bold text-green-700 mb-3">
          🎯 Final Summary
        </h2>
        <ul className="list-disc list-inside mb-2">
          <li>
            <b>LCC</b> = Budget → usually Non-GDS.
          </li>
          <li>
            <b>Non-LCC</b> = Full-service → usually GDS.
          </li>
          <li>
            <b>GDS</b> = Tech middleman; <b>Non-GDS</b> = direct booking.
          </li>
          <li>
            <b>IATA</b> = Allows actual ticket issuance through BSP.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AirlineBookingPage;
