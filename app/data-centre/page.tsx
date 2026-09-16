import Link from "next/link";
import Image from "next/image";

export default function datacentrePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">

{/* Project Header */}
<section className="mx-auto max-w-15xl px-8 pb-12 pt-16 md:px-16 md:pt-20">

  <Link
    href="/projects"
    className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#008B8B] transition-transform duration-200 hover:-translate-x-1"
  >
    ← Back to Projects
  </Link>

  <div className="max-w-5xl">

    <div className="mb-6 flex flex-wrap items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
        Research / Systems
      </span>

      <span className="text-slate-300">/</span>

      <span className="text-sm text-slate-500">
        Jul 2025 – Jul 2026
      </span>
    </div>

    <h1 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-7xl">
      High Availability Data Center Leveraging Bare Metal Hardware
      <span className="text-[#008B8B]">.</span>
    </h1>

    <p className="mt-6 max-w-4xl text-lg leading-8 text-[#475569]">
      This project involves the design and implementation of a Distributed
      Bare-Metal Datacenter. It serves as a scalable, high-availability,
      small-scale on-premise virtualization environment built to host
      fault-tolerant scientific computing workloads, containerized applications,
      and development tools. The infrastructure leverages Proxmox VE across
      multiple clustered nodes to provide isolated container provisioning,
      distributed storage, and centralized resource management.
    </p>

  </div>
</section>

      {/* Metrics */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          <div className="border-b border-slate-200 p-8 md:border-b-0 md:border-r">
            <p className="font-serif text-5xl md:text-6xl">30sec</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
              Achieved a 30-second Virtual Machine (VM) recovery time in the event of failure.
            </p>
          </div>

          <div className="border-b border-slate-200 p-8 md:border-b-0 md:border-r">
            <p className="font-serif text-5xl md:text-6xl">0 single point failures</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
              Eliminated all single points of failure through the fault-tolerant network topology.
            </p>
          </div>

          <div className="border-b border-slate-200 p-8 md:border-b-0 md:border-r">
            <p className="font-serif text-5xl md:text-6xl">CEPH</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
              Engineered a distributed Ceph storage backbone that enables zero-downtime live migrations.
            </p>
          </div>

          <div className="p-8">
            <p className="font-serif text-5xl md:text-6xl">4 nodes</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
              Ensured uninterrupted data processing capabilities for large-scale research simulations across the 4-node infrastructure
            </p>
          </div>

        </div>
      </section>


      {/* Approach */}
      <section className="mx-auto max-w-7xl px-8 py-16 md:px-16 md:py-20">

        <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
              01 / Architecture & Approach
            </p>
          </div>

          <div>

            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              From bare metal to HA servers
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <span className="font-serif text-3xl text-[#008B8B]">
                  01
                </span>

                <h3 className="mt-6 text-lg font-bold">
                  Cluster & Virtualization Setup
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The environment relies on a 4-node Proxmox VE high-availability cluster deployed on bare-metal systems to ensure stability, especially after initial Windows-based virtualization attempts proved unreliable under workloads
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <span className="font-serif text-3xl text-[#008B8B]">
                  02
                </span>

                <h3 className="mt-6 text-lg font-bold">
                  Network Isolation
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Institutional LAN restrictions and firewalls were bypassed by engineering an independent, VLAN-segmented network topology. This was achieved using a dedicated router and a Raspberry Pi gateway connected via a mobile hotspot uplink.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <span className="font-serif text-3xl text-[#008B8B]">
                  03
                </span>

                <h3 className="mt-6 text-lg font-bold">
                  External Deployment
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The system utilizes a secure reverse-proxy architecture combining Cloudflare Tunnels and Nginx. This enables custom domain mapping and controlled external access to internal services without compromising the isolated network.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>




      {/* Implementation */}
      <section className="mx-auto max-w-7xl px-8 py-16 md:px-16 md:py-20">

        <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
              02 / Implementation
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">

            <div>
              <h3 className="font-serif text-3xl">
                Bare-Metal Provisioning
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Proxmox VE was installed directly onto bare-metal hardware (Intel i5 systems with hardware virtualization enabled), followed by assigning static IPs and forming the cluster through the Proxmox interface.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Gateway Configuration
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                An isolated local network was established by routing traffic through a Raspberry Pi gateway, providing unrestricted inter-node communication and external internet access for package installations
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Containerization
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Linux Containers (LXC) and virtual machines were provisioned on a virtual bridge interface (vmbr0) to host core infrastructure and backend services.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Tunneling
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Cloudflare Tunnel was authenticated and configured on the nodes to securely route external web traffic to specific internal container IPs and ports.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Tech Stack */}
      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-8 py-16 md:px-16">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
            Technology
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Proxmox VE 8.0+",
              "Linux Containers (LXC)",
              "Raspberry Pi",
              "Docker",
              "Cloudflare",
              "Nginx",
              "Distributed Ceph"
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <section className="border-t border-slate-200">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-12 md:px-16">

          <Link
            href="/projects"
            className="text-sm font-bold text-[#008B8B] transition-transform duration-200 hover:-translate-x-1"
          >
            ← Back to Projects
          </Link>

          <span className="font-serif text-2xl">
            data-centre<span className="text-[#008B8B]">.</span>
          </span>

        </div>

      </section>

    </main>
  );
}