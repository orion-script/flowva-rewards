import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useRewards() {
  const [rewards, setRewards] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("User not authenticated");

      const [{ data: profileData }, { data: rewardsData }] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", user.id).single(),
        supabase.from("rewards").select("*").order("points_required"),
      ]);

      setProfile(profileData);
      setRewards(rewardsData || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { rewards, profile, loading, error, refetch: fetchData };
}
