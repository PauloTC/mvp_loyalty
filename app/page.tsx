'use client';
import NestedLayout from "@/components/layout";
import LandingComponent from "@/components/landing";

export default function LandingPage() {
  return (
    <>
      <NestedLayout hideOnMobile={false}>
        <LandingComponent />
      </NestedLayout>
    </>
  );
}
