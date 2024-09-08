export default function SharedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* Add any shared layout components here */}
      {children}
    </div>
  )
}