'use client';
import NestedLayout from "@/components/layout";
import LandingComponent from "@/components/landing";
import { ModalRating } from "@/components/modals";
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 5000)
  }, [])

  return (
    <>
      <NestedLayout hideOnMobile={false}>
        <LandingComponent />
        <ModalRating
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      </NestedLayout>
    </>
  );
}
