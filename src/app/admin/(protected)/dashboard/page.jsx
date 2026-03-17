"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import StatCard from "@/components/admin/StatCard";
import {
  HiOutlinePhotograph,
  HiOutlineBeaker,
  HiOutlineUserGroup,
  HiOutlineClock,
} from "react-icons/hi";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    gallery: null,
    research: null,
    team: null,
  });
  const [recentItems, setRecentItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      const [galleryRes, researchRes, teamRes] = await Promise.all([
        supabase.from("gallery").select("*", { count: "exact", head: true }),
        supabase.from("research").select("*", { count: "exact", head: true }),
        supabase.from("team").select("*", { count: "exact", head: true }),
      ]);

      setStats({
        gallery: galleryRes.count ?? 0,
        research: researchRes.count ?? 0,
        team: teamRes.count ?? 0,
      });

      const { data: recentGallery } = await supabase
        .from("gallery")
        .select("id, title, image_url, created_at")
        .order("created_at", { ascending: false })
        .limit(4);

      setRecentItems(recentGallery || []);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome back
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Here&apos;s an overview of your forest ecology research content.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          icon={HiOutlinePhotograph}
          label="Gallery Images"
          count={stats.gallery}
          color="forest"
        />
        <StatCard
          icon={HiOutlineBeaker}
          label="Research Posts"
          count={stats.research}
          color="blue"
        />
        <StatCard
          icon={HiOutlineUserGroup}
          label="Team Members"
          count={stats.team}
          color="amber"
        />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
          <HiOutlineClock className="w-5 h-5 text-gray-400" />
          <h3 className="font-semibold text-gray-800">Recent Gallery Uploads</h3>
        </div>

        {loading ? (
          <div className="p-6 space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 animate-pulse">
                <div className="w-14 h-14 bg-gray-200 rounded-lg shrink-0" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
                  <div className="h-3 bg-gray-100 rounded w-1/4" />
                </div>
              </div>
            ))}
          </div>
        ) : recentItems.length > 0 ? (
          <div className="divide-y divide-gray-50">
            {recentItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50 transition-colors">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-14 h-14 rounded-lg object-cover border border-gray-200"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(item.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 py-12 text-center">
            <HiOutlinePhotograph className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-400">No gallery images yet</p>
            <p className="text-xs text-gray-300 mt-1">
              Upload images from the Gallery page
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
