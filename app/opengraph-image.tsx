import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Site-wide share card (Facebook, iMessage, Google). Uses the real logo only —
// swap for a real food photo once AK picks one from Drive.
export const alt = "Chatham Burgers — flame-grilled since 1985, 215 Grand Ave W, Chatham, Ontario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "CB-2.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFAF2",
          borderTop: "18px solid #C8102E",
          borderBottom: "18px solid #F5C200",
        }}
      >
        {/* The logo file has wide transparent margins; crop to the artwork band. */}
        <div style={{ display: "flex", width: 1000, height: 330, overflow: "hidden" }}>
          <img src={logoSrc} width={1000} height={1000} style={{ marginTop: -330 }} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 40,
            color: "#3D1F0A",
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          Flame-grilled since 1985
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 30, color: "#6B5A4A" }}>
          215 Grand Ave W, Chatham, Ontario · (519) 354-1414
        </div>
      </div>
    ),
    size,
  );
}
