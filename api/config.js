export default function handler(req, res) {
  // Expose only the public anon key (safe to share with clients)
  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
  });
}
