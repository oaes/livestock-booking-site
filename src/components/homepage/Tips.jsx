import React from "react";
import { BiLeaf } from "react-icons/bi";
import { CgCrown } from "react-icons/cg";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuBicepsFlexed, LuHeartHandshake } from "react-icons/lu";

const Tips = () => {
  return (
    <div className="bg-purple-700 text-white py-20 px-6">
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Qurbani Tips and Top Breeds
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LEFT: Tips */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Quick checks for a healthy choice
          </h2>

          <div className="card bg-base-100 text-white shadow-xl p-6 space-y-4">

            <div className="flex gap-3 items-start">
              <IoCheckmarkCircleOutline className="text-purple-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Age Verification:</h3>
                <p>Ensure the animal is at least 2 years old (Cattle) or 1 year (Goat)</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <IoCheckmarkCircleOutline className="text-purple-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Health & Vitality:</h3>
                <p>Look for an active animal with bright eyes and a shiny coat</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <IoCheckmarkCircleOutline className="text-purple-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Physical Integrity:</h3>
                <p>Ensure the animal is healthy and free from defects. No injuries.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <IoCheckmarkCircleOutline className="text-purple-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Natural Growth:</h3>
                <p>Choose naturally-fed animals with solid muscle over bloated growth</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT: Breeds */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Top Breeds
          </h2>

          <div className="card bg-base-100 text-white shadow-xl p-6 space-y-4">

            <div className="flex gap-3 items-start">
              <LuBicepsFlexed className="text-purple-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Brahman:</h3>
                <p>Massive build, heat-resistant, and high meat yield.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <LuHeartHandshake className="text-purple-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Sahiwal:</h3>
                <p>Calm temperament with high-quality, low-fat meat.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <CgCrown className="text-purple-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Mirkadim:</h3>
                <p>Famous for white coat and tender meat.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <BiLeaf className="text-purple-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Desi:</h3>
                <p>Natural taste, organic growth, and widely available.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Tips;