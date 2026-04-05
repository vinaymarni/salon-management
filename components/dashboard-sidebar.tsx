'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Building2,
  Scissors,
  Palette,
  Users,
  LayoutDashboard,
  Plus,
} from 'lucide-react'

const navItems = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/forms/add-salon',
    label: 'Add Salon',
    icon: Building2,
  },
  {
    href: '/forms/add-service',
    label: 'Add Service',
    icon: Scissors,
  },
  {
    href: '/forms/add-styles',
    label: 'Add Styles',
    icon: Palette,
  },
  // {
  //   href: '/forms/add-stylist',
  //   label: 'Add Stylist',
  //   icon: Users,
  // },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-border bg-sidebar min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-sidebar-foreground">SalonPro</h1>
        <p className="text-sm text-sidebar-foreground/60">Management System</p>
      </div>

      <nav className="space-y-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(item.href)

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? 'default' : 'ghost'}
                className={cn(
                  'w-full justify-start gap-2',
                  isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-sidebar-border pt-4">
        <p className="text-xs text-sidebar-foreground/60 px-2 mb-3">
          Quick Actions
        </p>
        <Link href="/forms/add-salon" className="block">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Plus className="w-4 h-4" />
            New Salon
          </Button>
        </Link>
      </div>
    </aside>
  )
}
