import { Heart, Brain, Users, Shield, Sparkles } from 'lucide-react';


const features = [
  {
    icon: Brain,
    title: "Evidence-Based",
    description: "CBT, EMDR, and mindfulness techniques grounded in research",
    delay: "0ms",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "A warm, collaborative space for healing and growth",
    delay: "100ms",
  },
  {
    icon: Users,
    title: "Trauma-Informed",
    description: "Specialized support for trauma, anxiety, and burnout",
    delay: "200ms",
  },
  {
    icon: Shield,
    title: "Safe Space",
    description: "Confidential, judgment-free environment for exploration",
    delay: "300ms",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-secondary/5 blur-3xl animate-pulse-soft" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-accent/40 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 blob-shape bg-muted/50 blur-2xl animate-float-slow" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Section header with elegant styling */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/60 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="font-body text-sm font-medium tracking-wide text-secondary">
              Get to Know Me
            </span>
          </div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-primary md:text-5xl lg:text-6xl">
            About Dr. Maya Reynolds
          </h2>
          <p className="font-display text-xl italic text-muted-foreground md:text-2xl">
            PsyD
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20" />
        </div>

        {/* Main content grid */}
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left column - Biography */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Decorative quote mark */}
              <div className="absolute -left-4 -top-8 font-display text-9xl text-secondary/10 select-none">
                "
              </div>
              
              <div className="relative space-y-6 rounded-3xl bg-card/50 p-8 shadow-soft backdrop-blur-sm lg:p-10">
                <p className="font-body text-lg leading-relaxed text-foreground/80">
                  I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults
                  who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of
                  the people I work with are high-achieving, thoughtful, and self-aware—but internally feel
                  exhausted, stuck in overthinking, or emotionally on edge.
                </p>

                <div className="decorative-line my-8" />

                <p className="font-body text-lg leading-relaxed text-foreground/80">
                  My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me
                  feeling "functional" on the outside while quietly struggling with constant worry, tension in their
                  body, difficulty sleeping, or a sense that they're always bracing for something to go wrong.
                  Others are navigating the impact of earlier life experiences that continue to affect their
                  relationships, confidence, or sense of safety.
                </p>

                <div className="decorative-line my-8" />

                <p className="font-body text-lg leading-relaxed text-foreground/80">
                  I take a warm, collaborative, and grounded approach to therapy. Sessions are structured
                  enough to feel supportive, while still leaving space for reflection and depth. I integrate
                  evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR,
                  mindfulness-based practices, and body-oriented techniques to help clients understand both the
                  emotional and physiological sides of what they're experiencing.
                </p>

                <div className="decorative-line my-8" />

                <p className="font-body text-lg leading-relaxed text-foreground/80">
                  I believe therapy works best when clients feel respected, understood, and actively involved in
                  the process. My goal is not just symptom relief, but helping clients develop insight, resilience,
                  and a stronger relationship with themselves over time.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Features + Philosophy */}
          <div className="space-y-6 lg:col-span-5">
            {/* Feature cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group feature-card bg-card shadow-soft"
                  style={{ animationDelay: feature.delay }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-accent shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-medium">
                      <feature.icon className="h-7 w-7 text-secondary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display text-xl font-semibold text-primary">
                        {feature.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy card */}
            <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 shadow-elevated lg:p-10">
              {/* Decorative elements */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-foreground/5 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 blob-shape-2 bg-primary-foreground/5 blur-xl" />
              
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 backdrop-blur-sm">
                  <Heart className="h-4 w-4 text-primary-foreground/80" />
                  <span className="font-body text-xs font-medium uppercase tracking-wider text-primary-foreground/80">
                    My Philosophy
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-foreground lg:text-3xl">
                  Healing is a Journey, Not a Destination
                </h3>
                <p className="font-body text-base leading-relaxed text-white">
                  Therapy works best when you feel respected, understood, and actively involved.
                  My goal isn't just symptom relief—it's helping you develop insight, resilience,
                  and a stronger relationship with yourself over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
