import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ztjphfzebqocfskynukc.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0anBoZnplYnFvY2Zza3ludWtjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTMwMDAyOSwiZXhwIjoyMDQ2ODc2MDI5fQ.5bcO6lKLBwqRVRMvDuboNAE7iOl3ElH9lycamDHH4jU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0anBoZnplYnFvY2Zza3ludWtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMDAwMjksImV4cCI6MjA0Njg3NjAyOX0.WnUcj_TcerhiUezo4gUEPwos_vbo7K5WXFHqB257aPA"
    }
})