export const getAnimalsData = async () => {
  const res = await fetch(
    "https://livestock-booking-site.vercel.app/animalsData.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch animals data");
  }

  return res.json();
};