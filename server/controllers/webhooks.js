import { Webhook } from "svix";
import User from '../models/User.js';
import dotenv from 'dotenv'
dotenv.config()

export const clerkWebHooks = async (req, res) => {
    try {
        console.log("📌 Webhook çağrıldı!");
        
        console.log("📢 Gelen Webhook Verisi:", JSON.stringify(req.body, null, 2)); // Webhook verisini logla
        
        const { data, type } = req.body;
        console.log("📢 Webhook Türü:", type);
        
        switch (type) {
            case 'user.created': {
                console.log("👤 Yeni kullanıcı oluşturuluyor:", data);

                // EMAIL ADRESİNİN VAR OLDUĞUNDAN EMİN OL
                const email = data.email_addresses?.[0]?.email_address || "Bilinmiyor";

                const userData = {
                    _id: data.id,
                    email: email,
                    name: `${data.first_name} ${data.last_name}`,
                    image: data.image_url,
                    resume: ''
                };
                await User.create(userData);
                console.log("✅ Kullanıcı kaydedildi:", userData);
                res.json({ success: true, message: "User created" });
                break;
            }
            default:
                console.log("⚠️ Bilinmeyen Webhook Türü:", type);
                res.json({ success: false, message: "Unhandled event type" });
                break;
        }
    } catch (error) {
        console.error("❌ Webhook Hatası:", error.message);
        res.status(400).json({ success: false, message: "Webhook Error", error: error.message });
    }
};
