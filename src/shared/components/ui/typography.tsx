export function TypographyH1({ children }: React.ComponentProps<'h1'>) {
  return (
    <h1 className="scroll-m-20 children-4xl font-extrabold tracking-tight lg:children-5xl">
      {children}
    </h1>
  )
}

export function TypographyH2({ children }: React.ComponentProps<'h2'>) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 children-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  )
}

export function TypographyH3({ children }: React.ComponentProps<'h3'>) {
  return (
    <h3 className="scroll-m-20 children-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

export function TypographyH4({ children }: React.ComponentProps<'h4'>) {
  return (
    <h4 className="scroll-m-20 children-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}

export function TypographyP({ children }: React.ComponentProps<'p'>) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children }: React.ComponentProps<'blockquote'>) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {children}
    </blockquote>
  )
}

export function TypographyLead({ children }: React.ComponentProps<'p'>) {
  return (
    <p className="text-lg text-muted-foreground">
      {children}
    </p>
  )
}
