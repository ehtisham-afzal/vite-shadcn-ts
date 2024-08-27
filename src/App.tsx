import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./components/mode-toggle"

export default function App() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 w-full">
      <Card className="w-full max-w-md">
        <CardHeader>
          <ModeToggle/>
          <CardTitle className="text-2xl font-bold text-center">Book a Ride</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">From</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Norsborg" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="norsborg">Norsborg</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">To</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Arlanda Airport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="arlanda">Arlanda Airport</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Pickup Date</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="22-03-24" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="22-03-24">22-03-24</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Pickup Time</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="14:00" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="14:00">14:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Vehicle Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="select vehicle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal (4)</SelectItem>
                <SelectItem value="xl">XL (6)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Payment Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Swish" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="swish">Swish</SelectItem>
                <SelectItem value="pay-in-car">Pay in Car</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <Input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Price</label>
            <div className="text-lg font-semibold">500 SEK</div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Book</Button>
        </CardFooter>
      </Card>
    </div>
  )
}