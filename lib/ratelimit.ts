import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import redis from "@/database/redis";

// Create a new ratelimiter, that allows 5 requests per 1 minute
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "1m"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});
export default ratelimit;
