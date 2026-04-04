'use client'

import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Empty } from '@/components/ui/empty'
import {
  Building2,
  Scissors,
  Palette,
  Users,
  Plus,
  Trash2,
} from 'lucide-react'
import Link from 'next/link'
import {
  salonsAtom,
  servicesAtom,
  stylesAtom,
  stylistsAtom,
} from '@/lib/atoms'
import { cities, localities, states } from '@/lib/data'
// import {
//   mockSalons,
//   mockServices,
//   mockStyles,
//   mockStylists,
// } from '@/lib/mock-data'

export default function DashboardPage() {
  const [salons, setSalons] = useAtom(salonsAtom)
  const [services, setServices] = useAtom(servicesAtom)
  const [styles, setStyles] = useAtom(stylesAtom)
  const [stylists, setStyilists] = useAtom(stylistsAtom)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize with mock data on first load
  useEffect(() => {
    if (!isInitialized) {
      if (salons.length === 0) setSalons([])
      if (services.length === 0) setServices([])
      if (styles.length === 0) setStyles([])
      if (stylists.length === 0) setStyilists([])
      setIsInitialized(true)
    }
  }, [isInitialized, salons, services, styles, stylists, setSalons, setServices, setStyles, setStyilists])

  const stats = [
    {
      title: 'Salons',
      count: salons.length,
      icon: Building2,
      href: '/forms/add-salon',
      color: 'text-blue-600',
    },
    {
      title: 'Services',
      count: services.length,
      icon: Scissors,
      href: '/forms/add-service',
      color: 'text-purple-600',
    },
    {
      title: 'Styles',
      count: styles.length,
      icon: Palette,
      href: '/forms/add-styles',
      color: 'text-pink-600',
    },
    {
      title: 'Stylists',
      count: stylists.length,
      icon: Users,
      href: '/forms/add-stylist',
      color: 'text-green-600',
    },
  ];

  const getName = (name: string, identifier: string) => {
    const list = identifier === "state" ? states : identifier === "city" ? cities : localities;
    const obj = list.filter((each)=> each.value == name) ?? [];
    return obj[0] ? obj[0].name : ""
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your salon business with ease
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          if(!stat.title) return;
          return (
            <Card key={`salon_${stat.title}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.count}</div>
                <Link href={stat.href} className="block mt-2">
                  <Button variant="ghost" size="sm" className="h-8">
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Salons Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Salons</h2>
          <Link href="/forms/add-salon">
            <Button size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Salon
            </Button>
          </Link>
        </div>
        {salons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {salons.map((salon) => {
              if(!salon.id) return;
              return(
              <Card key={`add_salon_${salon.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{salon.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2 capitalize ">
                    Owner: {salon.ownerName} 📞 {salon.phone}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    ✉️ {salon.email}
                  </p>
                  {salon.description && (
                    <p className="text-sm mb-4">{salon.description}</p>
                  )}
                  <p className="text-sm text-muted-foreground mb-4">
                    {getName(salon.state, "state")}, {getName(salon.city, "city")}, {getName(salon.locality, "locality")}-{salon.pincode}
                  </p>

                  <button
                    onClick={() =>
                      setSalons((prev) =>
                        prev.filter((s) => s.id !== salon.id)
                      )
                    }
                    className="text-destructive text-sm flex items-center gap-1 hover:underline"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </CardContent>
              </Card>
            )})}
          </div>
        ) : (
          <Empty
            heading="No salons yet"
            description="Create your first salon to get started"
          />
        )}
      </div>

      {/* Services Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Services</h2>
          <Link href="/forms/add-service">
            <Button size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Service
            </Button>
          </Link>
        </div>
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => {
              if(!service.id) return;
              return(
              <Card key={`service_${service.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>
                    {service.duration} • {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {service.description && (
                    <p className="text-sm mb-4">{service.description}</p>
                  )}
                  <button
                    onClick={() =>
                      setServices((prev) =>
                        prev.filter((s) => s.id !== service.id)
                      )
                    }
                    className="text-destructive text-sm flex items-center gap-1 hover:underline"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </CardContent>
              </Card>
            )})}
          </div>
        ) : (
          <Empty
            heading="No services yet"
            description="Add a service to your salon"
          />
        )}
      </div>

      {/* Styles Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Styles</h2>
          <Link href="/forms/add-service">
            <Button size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Style
            </Button>
          </Link>
        </div>
        {styles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {styles.map((style) => {
              if(!style.id) return;
              return(
              <Card key={`service_${style.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{style.name}</CardTitle>
                  <CardDescription>
                    {style.complexity} • {style.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {style.description && (
                    <p className="text-sm mb-4">{style.description}</p>
                  )}
                  <button
                    onClick={() =>
                      setServices((prev) =>
                        prev.filter((s) => s.id !== style.id)
                      )
                    }
                    className="text-destructive text-sm flex items-center gap-1 hover:underline"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </CardContent>
              </Card>
            )})}
          </div>
        ) : (
          <Empty
            heading="No services yet"
            description="Add a service to your salon"
          />
        )}
      </div>

      {/* Stylists Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Stylists</h2>
          <Link href="/forms/add-stylist">
            <Button size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Stylist
            </Button>
          </Link>
        </div>
        {stylists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stylists.map((stylist) => {
              if(!stylist.id) return;
              return(
              <Card key={`stylist_${stylist.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{stylist.name}</CardTitle>
                  <CardDescription>{stylist.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    📞 {stylist.phone}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-1">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {stylist.specialties?.map((specialty) => {
                        if(!specialty) return;
                        return(
                        <span
                          key={`specialty_${specialty}`}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {specialty}
                        </span>
                      )})}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setStyilists((prev) =>
                        prev.filter((s) => s.id !== stylist.id)
                      )
                    }
                    className="text-destructive text-sm flex items-center gap-1 hover:underline"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </CardContent>
              </Card>
            )})}
          </div>
        ) : (
          <Empty
            heading="No stylists yet"
            description="Add your first stylist to the team"
          />
        )}
      </div>
    </div>
  )
}
