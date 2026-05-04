export const getAnimalsData = async () => {
  try {
    const res = await fetch(
      "https://livestock-booking-site.vercel.app/animalsData.json",
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};