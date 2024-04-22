import NestedLayout from "@/components/layout";
import PrincipalBanner from "@/components/banner";
import NeedHelp from "@/components/help";

export default async function HowItWorksPage() {
  return (
    <NestedLayout>
      <PrincipalBanner />
      <section>
        <h4>Como funciona pagína</h4>
      </section>

      <NeedHelp />
    </NestedLayout>
  );
}
