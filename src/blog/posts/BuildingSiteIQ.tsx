import BlogPost from '../BlogPost'

export default function BuildingSiteIQ() {
  return (
    <BlogPost>
      <h1>Building SiteIQ: A Parcel Scoring Tool That Actually Gets Used</h1>
      
      <h2>The Problem</h2>
      <p>
        Early in my time at Florida Land Design & Permitting, I found myself repeating the same parcel evaluation process over and over: pull parcel data, overlay floodplain layers, check wetlands, calculate developable acreage. Every. Single. Parcel.
      </p>
      <p>
        Developers needed quick answers. Is this site worth pursuing? How much can we actually develop? But our workflow meant waiting hours for answers that should take minutes.
      </p>

      <h2>The Solution</h2>
      <p>
        I built SiteIQ as a Python script that automatically scores parcels based on developable acreage after accounting for wetlands and floodplains.
      </p>
      <p>The workflow:</p>
      <ol>
        <li>Input a parcel layer</li>
        <li>Evaluate wetland coverage and floodplain impact</li>
        <li>Calculate developable acreage</li>
        <li>Score each parcel 0 to 1 (1 being best)</li>
        <li>Output web ready GeoJSON</li>
      </ol>
      <p>Minutes instead of hours.</p>

      <h2>Keeping It Simple</h2>
      <p>
        The first version included scoring for zoning, soils, and future land use. It sounded good but complicated things without adding real value.
      </p>
      <p>
        I simplified. Pre filter parcels for those criteria, then let SiteIQ focus on what it does best: scoring based on environmental constraints that actually impact developable acreage.
      </p>

      <h2>Why It Works</h2>
      <p>
        <strong>Speed.</strong> Batch process hundreds of parcels in minutes.
      </p>
      <p>
        <strong>Clarity.</strong> Color coded maps where green means good opportunity.
      </p>
      <p>
        <strong>Integration.</strong> GeoJSON drops straight into web maps. Developers view results on their phones while driving past sites.
      </p>

      <h2>Impact</h2>
      <p>
        SiteIQ is now part of our standard workflow. Instead of lengthy reports, we show interactive maps where opportunities stand out visually. The analysis becomes a conversation, not just a deliverable.
      </p>
    </BlogPost>
  )
}
