import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Users, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledDestination?: string;
}

const steps = [
  { id: 1, title: "Destination & Dates" },
  { id: 2, title: "Guest Details" },
  { id: 3, title: "Confirmation" },
];

const BookingModal = ({ isOpen, onClose, prefilledDestination = "" }: BookingModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: prefilledDestination,
    checkIn: "",
    checkOut: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // In a real app, this would submit to an API
    setCurrentStep(3);
  };

  const handleClose = () => {
    setCurrentStep(1);
    setFormData({
      destination: "",
      checkIn: "",
      checkOut: "",
      guests: "2",
      name: "",
      email: "",
      phone: "",
      specialRequests: "",
    });
    onClose();
  };

  const isStep1Valid = formData.destination && formData.checkIn && formData.checkOut;
  const isStep2Valid = formData.name && formData.email && formData.phone;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-serif text-2xl text-foreground">
            Plan Your Trip
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-sans text-sm font-medium transition-colors ${
                      currentStep >= step.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
                  </div>
                  <span className="text-xs font-sans text-muted-foreground mt-2 hidden sm:block">
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-20 h-0.5 mx-2 transition-colors ${
                      currentStep > step.id ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="destination" className="text-foreground">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Destination
                  </Label>
                  <Input
                    id="destination"
                    name="destination"
                    placeholder="Where do you want to go?"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkIn" className="text-foreground">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Check In
                    </Label>
                    <Input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut" className="text-foreground">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Check Out
                    </Label>
                    <Input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="guests" className="text-foreground">
                    <Users className="w-4 h-4 inline mr-2" />
                    Number of Guests
                  </Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="20"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <Button
                  variant="luxury"
                  className="w-full mt-4"
                  onClick={handleNext}
                  disabled={!isStep1Valid}
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={handleBack} className="flex-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    variant="luxury"
                    onClick={handleSubmit}
                    disabled={!isStep2Valid}
                    className="flex-1"
                  >
                    Submit Request
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-secondary" />
                </motion.div>
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  Request Submitted!
                </h3>
                <p className="text-muted-foreground font-sans mb-6">
                  Thank you, {formData.name}! Our travel experts will contact you within 24 hours to plan your perfect trip to {formData.destination}.
                </p>
                <Button variant="luxury" onClick={handleClose}>
                  Done
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
