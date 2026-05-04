import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWeight } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const AnimalCard = ({ animal }) => {
  // Safe image fallback
  const imageSrc =
    typeof animal?.image === "string" && animal.image.trim() !== ""
      ? animal.image
      : "/placeholder.jpg";

  return (
    <div className="card bg-base-100 border border-purple-500 shadow-md rounded-2xl overflow-hidden">
      
      {/* Image */}
      <figure className="relative aspect-square">
        <Image
          src={imageSrc}
          alt={animal?.name || "Animal"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />

        {/* Category badge */}
        <div className="absolute top-2 right-2">
          <span className="badge badge-secondary">
            {animal?.category || "N/A"}
          </span>
        </div>
      </figure>

      {/* Content */}
      <div className="card-body space-y-3">

        <h2 className="card-title text-xl font-bold">
          {animal?.name || "Unknown Animal"}
        </h2>

        {/* Price & Weight */}
        <div className="flex justify-between items-center text-lg">

          <div className="flex items-center gap-1 text-green-600 font-medium">
            <FaBangladeshiTakaSign />
            {animal?.price || 0}
          </div>

          <div className="flex items-center gap-1 text-blue-600 font-medium">
            <FaWeight />
            {animal?.weight || 0} kg
          </div>
        </div>

        {/* Button */}
        <div className="card-actions">
          <Link href={`/all-animals/${animal?.id || "#"}`} className="w-full">
            <button className="btn btn-outline btn-primary w-full">
              View
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AnimalCard;