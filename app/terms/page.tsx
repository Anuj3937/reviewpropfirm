import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of Service for Prop Firm Reviews - Rules and guidelines for using our website.",
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
                <p className="text-zinc-400 mb-8">Last updated: December 2024</p>

                <div className="prose prose-invert prose-lg max-w-none">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            By accessing and using Prop Firm Reviews, you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Prop Firm Reviews is an informational website that provides reviews, comparisons, and educational content
                            about proprietary trading firms. We help traders make informed decisions by aggregating information
                            and user reviews about various prop trading companies.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                        <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6">
                            <p className="text-amber-200 leading-relaxed font-medium">
                                ⚠️ Trading involves significant risk of loss. The information provided on this website is for
                                educational purposes only and should not be considered financial advice. Past performance
                                does not guarantee future results.
                            </p>
                        </div>
                        <div className="text-zinc-300 leading-relaxed space-y-4">
                            <p>We make no guarantees about:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The accuracy, completeness, or timeliness of information on this site</li>
                                <li>The reliability or performance of any prop trading firm reviewed</li>
                                <li>Your success or profitability with any trading firm</li>
                                <li>The continued operation of any listed prop firm</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Affiliate Relationships</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Some links on our website are affiliate links. We may receive compensation when you sign up
                            with a prop firm through our links. This compensation does not influence our reviews or ratings,
                            which are based on objective criteria and user feedback.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. User Accounts</h2>
                        <div className="text-zinc-300 leading-relaxed space-y-4">
                            <p>When creating an account, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Not share your account with others</li>
                                <li>Notify us immediately of any unauthorized access</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">6. User-Generated Content</h2>
                        <div className="text-zinc-300 leading-relaxed space-y-4">
                            <p>When submitting reviews or comments, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide honest and accurate information based on your actual experience</li>
                                <li>Not post false, misleading, or defamatory content</li>
                                <li>Not engage in spam, harassment, or abusive behavior</li>
                                <li>Grant us a license to display your content on our platform</li>
                            </ul>
                            <p>
                                We reserve the right to remove any content that violates these terms or is otherwise inappropriate.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            All content on this website, including text, graphics, logos, and software, is the property of
                            Prop Firm Reviews or its content providers and is protected by copyright laws. You may not
                            reproduce, distribute, or create derivative works without our written permission.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            To the maximum extent permitted by law, Prop Firm Reviews shall not be liable for any indirect,
                            incidental, special, consequential, or punitive damages, including but not limited to loss of profits,
                            data, or other intangible losses, resulting from your use of or inability to use our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We reserve the right to modify these terms at any time. We will notify users of significant changes
                            by posting a notice on our website. Your continued use of the service after changes constitutes
                            acceptance of the new terms.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            These terms shall be governed by and construed in accordance with applicable laws,
                            without regard to conflicts of law principles.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">11. Contact</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            For questions about these Terms of Service, please contact us at:
                            <a href="mailto:legal@thepropfirmreviews.com" className="text-primary hover:underline ml-1">
                                legal@thepropfirmreviews.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
