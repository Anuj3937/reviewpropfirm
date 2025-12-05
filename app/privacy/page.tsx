import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Prop Firm Reviews - How we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
                <p className="text-zinc-400 mb-8">Last updated: December 2024</p>

                <div className="prose prose-invert prose-lg max-w-none">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Welcome to Prop Firm Reviews. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <div className="text-zinc-300 leading-relaxed space-y-4">
                            <p>We may collect the following types of information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-white">Account Information:</strong> When you create an account, we collect your email address, name, and profile photo (if signing in with Google).</li>
                                <li><strong className="text-white">Usage Data:</strong> We collect information about how you interact with our website, including pages visited, time spent, and features used.</li>
                                <li><strong className="text-white">Reviews & Comments:</strong> Any reviews or comments you submit are stored and displayed publicly.</li>
                                <li><strong className="text-white">Newsletter Subscriptions:</strong> If you subscribe to our newsletter, we store your email address.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <div className="text-zinc-300 leading-relaxed space-y-4">
                            <p>We use the collected information to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide and maintain our services</li>
                                <li>Send you newsletters and promotional content (with your consent)</li>
                                <li>Improve our website and user experience</li>
                                <li>Display user reviews and ratings</li>
                                <li>Prevent fraud and ensure security</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Storage & Security</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We use Firebase (Google Cloud) to store user data securely. Your data is encrypted in transit and at rest.
                            We implement appropriate security measures to protect against unauthorized access, alteration, or destruction of your data.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
                        <div className="text-zinc-300 leading-relaxed space-y-4">
                            <p>We use the following third-party services:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-white">Firebase:</strong> Authentication and database services</li>
                                <li><strong className="text-white">Google Analytics:</strong> Website analytics (optional)</li>
                                <li><strong className="text-white">Vercel:</strong> Website hosting</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Affiliate Disclosure</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Some links on our website are affiliate links. This means we may earn a commission if you click on a link
                            and make a purchase. This does not affect our reviews or ratings, which are based on independent research and user feedback.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
                        <div className="text-zinc-300 leading-relaxed space-y-4">
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your account and data</li>
                                <li>Unsubscribe from our newsletter at any time</li>
                                <li>Object to processing of your data</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Cookies</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We use essential cookies to maintain your session and preferences.
                            We may also use analytics cookies to understand how visitors interact with our website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
                            <a href="mailto:privacy@thepropfirmreviews.com" className="text-primary hover:underline ml-1">
                                privacy@thepropfirmreviews.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
