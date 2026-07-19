const quickAccessItems = [
  {
    title: "Payment Reference ID",
    description:
      "Nomor referensi pembayaran untuk memudahkan pencocokan transaksi dan bukti administrasi.",
    action: "Buka Form",
    href: "https://docs.google.com/spreadsheets/d/1TDPlmaoZPdYi0ZbC5VpVik35wcVa2m-MKFbobLXCX_4/edit?usp=sharing",
  },
  {
    title: "Monitoring Mitra",
    description:
      "Ringkasan monitoring perpanjangan kerja sama sekolah, status follow-up, dan tenggat aksi.",
    action: "Lihat megasheet",
    href: "https://docs.google.com/spreadsheets/d/10HqRLqpnWL_l5LLt9AHIjDy_daLcxBOQk85o91DQRVM/edit?usp=sharing",
  },
  {
    title: "Change Request Form",
    description:
      "Form baku untuk mengajukan perubahan dokumen, jadwal, atau penyesuaian proses kerja.",
    action: "Buka Template",
    href: "https://docs.google.com/document/d/14SvDejvojsPvcUJE_iuRuW0qc1BEOyIn591qt5V5cZU/edit?usp=sharing",
  },
  {
    title: "Project Completion Report",
    description:
      "Template laporan penyelesaian kegiatan dan evaluasi hasil implementasi administrasi.",
    action: "Buka Template",
    href: "https://www.canva.com/design/DAG6VavbE3k/BdUhtnh1VvL54JD_Vot0DA/edit",
  },
  {
    title: "Worksheet Penyimpanan Arsip Digital",
    description:
      "Struktur arsip digital agar dokumen tersimpan konsisten, mudah dicari, dan siap audit.",
    action: "Buka struktur",
    href: "https://docs.google.com/spreadsheets/d/1UgkKYsPIuOSeUSN3TgpkagB0h2qAsBASele5ps6XJNQ/edit?usp=sharing",
  },
  {
    title: "Document Templates",
    description:
      "Pusat dokumen untuk menyatukan template, form, dan lampiran revisi versi terbaru.",
    action: "Akses folder",
    href: "https://drive.google.com/drive/folders/1lTP4EvStaBzpx6XyZP_fX5mjp5iFef0x",
  },
];

const resourceItems = [
  {
    title: "Tutorial Video",
    description:
      "Cuplikan video onboarding untuk menjelaskan alur SOP dan penggunaan template digital.",
    tag: "Video",
  },
  {
    title: "Panduan Implementasi SOP",
    description:
      "Langkah penerapan di unit administrasi pemasaran, termasuk pembagian tugas dan alur approval.",
    tag: "Guide",
  },
  {
    title: "Template Siap Pakai",
    description:
      "Kumpulan form kerja yang dapat langsung dipakai pada operasional harian.",
    tag: "Template",
  },
  {
    title: "FAQ Umum",
    description:
      "Jawaban cepat untuk pertanyaan staf non-teknis saat menjalankan SOP digital.",
    tag: "FAQ",
  },
  {
    title: "Dokumentasi Teknis",
    description:
      "Struktur folder, standar penamaan file, dan catatan pemeliharaan portal.",
    tag: "Technical",
  },
  {
    title: "User Guide",
    description:
      "Panduan navigasi portal untuk staf baru agar bisa menemukan SOP dan resource dengan cepat.",
    tag: "Guide",
  },
];

const sopData = [
  {
    id: "sop-1",
    number: "SOP 1",
    title: "Administrasi Pembayaran Program",
    shortTitle: "Pembayaran Program",
    description:
      "Mengatur alur penerimaan data pembayaran, verifikasi bukti transaksi, hingga pencatatan status pada administrasi pemasaran.",
    purpose:
      "Menjamin setiap pembayaran program tercatat, tervalidasi, dan dapat ditelusuri oleh tim administrasi serta finance.",
    scope:
      "Meliputi 7 proses administrasi pembayaran program ekstrakurikuler: reminder pembayaran, pembayaran oleh orang tua, validasi pembayaran, monitoring pembayaran, reminder dan escalation, pelaporan pembayaran, hingga pengarsipan pembayaran digital.",
    parties: [
      "Teacher",
      "PIC Administrasi Pembayaran",
      "Finance Cabang",
      "Branch Manager",
    ],
    documents: [
      "Form Konfirmasi Pembayaran",
      "Bukti Transfer",
      "Rekapitulasi Pembayaran",
      "Laporan Pembayaran",
    ],
    metadata: {
      documentNumber: "442/ROB/SOP/IV/2026",
      releaseDate: "15 Maret 2026",
      revisionDate: "01 April 2026",
      owner: "Branch Manager",
    },
    templatePdf: "pdf/1.pdf",
    steps: [
      {
        title: "Reminder Pembayaran",
        activity:
          "PIC Administrasi membuat reminder pembayaran menggunakan template standar, lalu mengirimkannya melalui WhatsApp Group orang tua siswa. Reminder memuat nominal pembayaran, tenggat pembayaran, rekening pembayaran, Payment Reference ID, dan link form pembayaran.",
        document: "Template Reminder (WhatsApp Group)",
        responsible: "PIC Administrasi Pembayaran",
        output: "Reminder pembayaran terkirim kepada orang tua siswa.",
      },
      {
        title: "Pembayaran oleh Orang Tua",
        activity:
          "Orang tua melakukan pembayaran melalui rekening atau QRIS perusahaan, mengisi form konfirmasi pembayaran, dan mengunggah bukti transfer.",
        document: "Form Konfirmasi Pembayaran (Google Form) + Bukti Transfer",
        responsible: "Orang Tua Siswa",
        output: "Data pembayaran masuk ke sistem administrasi pembayaran.",
      },
      {
        title: "Validasi Pembayaran",
        activity:
          "PIC memeriksa bukti pembayaran, mencocokkan nominal dengan data siswa, melakukan validasi, dan memperbarui status pembayaran pada dashboard monitoring.",
        document: "Dashboard Administrasi Pembayaran",
        responsible: "PIC Administrasi Pembayaran",
        output:
          "Status pembayaran terverifikasi (Paid / Pending / Invalid / Overdue).",
        decision: {
          question: "Apakah bukti pembayaran valid dan nominal sesuai?",
          description:
            "Menentukan apakah status ditetapkan Paid, atau masuk kategori Pending/Invalid/Overdue yang perlu tindak lanjut.",
          yesLabel: "Ya, status Paid",
          noLabel: "Tidak, Pending/Invalid/Overdue",
          yesOutcome:
            "Status pembayaran diperbarui menjadi Paid, lanjut ke tahap Monitoring Pembayaran.",
          noOutcome:
            "Status ditandai Pending/Invalid/Overdue, masuk alur Reminder dan Escalation sesuai tenggat.",
        },
      },
      {
        title: "Monitoring Pembayaran",
        activity:
          "PIC memonitor status pembayaran secara berkala dan memperbarui worksheet monitoring berdasarkan sekolah, kelas, program, dan status pembayaran.",
        document: "Worksheet Monitoring Pembayaran",
        responsible: "PIC Administrasi Pembayaran",
        output: "Dashboard pembayaran ter-update.",
      },
      {
        title: "Reminder dan Escalation",
        activity:
          "PIC melakukan follow-up sesuai tenggat: reminder grup pada H-3 sebelum jatuh tempo, personal follow-up pada H+1 keterlambatan. Jika pembayaran belum diterima hingga H+7, kasus diteruskan ke Finance untuk escalation lanjutan.",
        document: "Worksheet Monitoring Pembayaran",
        responsible: "PIC Administrasi Pembayaran & Finance",
        output: "Tindak lanjut pembayaran terlaksana.",
        decision: {
          question: "Apakah pembayaran sudah diterima setelah follow-up?",
          description:
            "Menentukan apakah kasus selesai di tahap follow-up atau perlu dieskalasi ke Finance.",
          yesLabel: "Ya, sudah diterima",
          noLabel: "Belum (H+7), eskalasi ke Finance",
          yesOutcome:
            "Pembayaran tercatat Paid, kasus ditutup dan kembali ke alur Monitoring Pembayaran.",
          noOutcome:
            "Kasus diteruskan ke Finance untuk escalation lanjutan sesuai kebijakan perusahaan.",
        },
      },
      {
        title: "Pelaporan Pembayaran",
        activity:
          "PIC membuat laporan pembayaran berkala yang mencakup total pembayaran, overdue payment, dan escalation report, lalu diserahkan kepada Branch Manager dan Finance.",
        document: "Laporan Pembayaran",
        responsible: "PIC Administrasi Pembayaran",
        output: "Laporan administrasi pembayaran tersedia.",
      },
      {
        title: "Pengarsipan Pembayaran Digital",
        activity:
          "Bukti pembayaran disimpan dalam digital archive berdasarkan sekolah, periode pembayaran, dan status pembayaran. Backup data dilakukan secara berkala.",
        document: "Arsip Digital",
        responsible: "PIC Administrasi Pembayaran",
        output: "Arsip pembayaran terdokumentasi secara digital.",
      },
    ],
    faq: [
      {
        question: "Apa yang dilakukan jika nominal tidak sesuai?",
        answer:
          "Tandai sebagai pending, minta klarifikasi peserta, dan jangan ubah status sebelum data lengkap.",
      },
      {
        question: "Siapa yang berhak mengonfirmasi final?",
        answer:
          "Finance atau koordinator yang ditetapkan sebagai otorisator akhir.",
      },
    ],
    troubleshooting: [
      "Bukti transfer buram: minta unggahan ulang dengan resolusi yang lebih jelas.",
      "Data peserta belum ditemukan: cek nomor pendaftaran dan kanal komunikasi yang digunakan.",
    ],
    support:
      "PIC: Staf Administrasi Pemasaran | WhatsApp internal / email kantor",
  },
  {
    id: "sop-2",
    number: "SOP 2",
    title: "Pengarsipan Dokumen Digital",
    shortTitle: "Arsip Digital",
    description:
      "Mengelola penyimpanan, penamaan, dan klasifikasi dokumen agar arsip dapat dicari, diperbarui, dan diaudit dengan cepat.",
    purpose:
      "Menciptakan struktur arsip digital yang konsisten, aman, dan mudah dipahami oleh pengguna non-teknis.",
    scope:
      "Berlaku untuk seluruh dokumen dinamis, baik fasilitatif maupun substantif, yang dihasilkan dari aktivitas administrasi dan pemasaran: Surat Penawaran Harga (SPH), naskah kerja sama (MoU), bukti transaksi/kuitansi, data siswa/prospek, laporan kegiatan, serta dokumentasi kelas (Intrakurikuler dan Ekstrakurikuler).",
    parties: [
      "Staf Marketing (Kontributor)",
      "PIC Pemasaran Cabang (Administrator)",
      "Branch Manager (Supervisor)",
    ],
    documents: [
      "Master List Arsip Digital (Template)",
      "Cloud Storage Perusahaan (Google Drive)",
      "File Naming Convention (FNC) Guide",
      "Matriks RBAC (Lampiran C)",
    ],
    metadata: {
      documentNumber: "443/ROB/SOP/IV/2026",
      releaseDate: "17 Maret 2026",
      revisionDate: "01 April 2026",
      owner: "Branch Manager",
    },
    templatePdf: "pdf/2.pdf",
    steps: [
      {
        title: "Terima / Terbit Dokumen",
        activity:
          "Staf Marketing menerima dokumen fisik (hardcopy) dari pihak eksternal (sekolah/lembaga mitra) atau menghasilkan dokumen digital baru dari aktivitas pemasaran/kerja sama, lalu memverifikasi kelengkapan awal (tanda tangan, cap resmi, atau kelengkapan lampiran).",
        document: "Dokumen fisik/digital sumber",
        responsible: "Staf Marketing",
        output: "Dokumen fisik atau digital yang siap diproses.",
      },
      {
        title: "Verifikasi Kelengkapan",
        activity:
          "PIC Pemasaran Cabang memeriksa kelengkapan, keaslian, dan relevansi dokumen sebelum masuk ke tahap alih media.",
        document: "Checklist Kelengkapan Dokumen",
        responsible: "PIC Pemasaran Cabang",
        output: "Status dokumen: layak lanjut atau dikembalikan.",
        decision: {
          question: "Apakah dokumen lengkap, asli, dan relevan?",
          description:
            "Menentukan apakah dokumen bisa lanjut ke tahap scan, atau harus dikembalikan ke pengirim untuk diperbaiki.",
          yesLabel: "Ya, lanjut ke scan",
          noLabel: "Tidak, dikembalikan",
          yesOutcome: "Dokumen lanjut ke tahap Scan PDF/OCR.",
          noOutcome:
            "Dokumen dikembalikan kepada pengirim disertai catatan perbaikan.",
        },
      },
      {
        title: "Scan PDF / OCR",
        activity:
          "Dokumen fisik dialihmediakan menjadi format digital (PDF/OCR) dengan resolusi minimum 300 dpi dalam format PDF/A, maksimal 1×24 jam setelah dokumen diterima atau ditandatangani. Dokumen yang sudah digital diperiksa format dan ukuran filenya.",
        document: "File PDF/A hasil scan",
        responsible: "Staf Marketing",
        output: "Dokumen digital siap diberi nama file.",
      },
      {
        title: "Penamaan File (FNC)",
        activity:
          "File diberi nama sesuai File Naming Convention: KAT-ENT-YYYYMMDD-SEQ (contoh: MKT-ENT01-20240815-001), konsisten dengan format [YYYYMMDD]_[JenisDokumen]_[NamaEntitas]_[Versi].",
        document: "File Naming Convention (FNC) Guide",
        responsible: "Staf Marketing",
        output: "File dengan nama sesuai standar FNC.",
      },
      {
        title: "Upload ke Cloud Storage",
        activity:
          "Staf Marketing masuk ke cloud storage perusahaan menggunakan akun resmi, lalu mengunggah file ke folder kategori yang sesuai dalam hierarki Google Drive sesuai kategori dan entitas.",
        document: "Cloud Storage Perusahaan (Google Drive)",
        responsible: "Staf Marketing",
        output: "File tersimpan di folder kategori yang sesuai.",
      },
      {
        title: "Input Master List Arsip",
        activity:
          "Staf Marketing membuka Master List Arsip dan menambahkan entri Document ID beserta seluruh metadata terkait (kategori, owner, tanggal, path storage) pada hari yang sama dengan pengunggahan.",
        document: "Master List Arsip Digital (Template)",
        responsible: "Staf Marketing",
        output: "Metadata dokumen tercatat di Master List Arsip.",
      },
      {
        title: "Validasi PIC / Manager",
        activity:
          "PIC Pemasaran Cabang melakukan pengecekan berkala terhadap file baru: memverifikasi kesesuaian penamaan (FNC), keakuratan input Master List, dan mengatur hak akses folder. Branch Manager melakukan review dan approval akhir.",
        document: "Master List Arsip Digital + Matriks RBAC",
        responsible: "PIC Pemasaran Cabang / Branch Manager",
        output: "Dokumen disetujui atau dikembalikan untuk revisi.",
        decision: {
          question: "Apakah dokumen disetujui PIC/Manager?",
          description:
            "Menentukan apakah dokumen dikunci sebagai arsip final, atau harus dikembalikan untuk perbaikan penamaan/penempatan folder.",
          yesLabel: "Ya, disetujui",
          noLabel: "Tidak, perlu revisi",
          yesOutcome:
            "Dokumen lanjut ke tahap Arsip Final dengan status Valid.",
          noOutcome:
            "Dokumen dikembalikan ke tahap Penamaan File (FNC) untuk diperbaiki sebelum diajukan ulang.",
        },
      },
      {
        title: "Arsip Final – Status VALID",
        activity:
          "Dokumen dikunci dengan status Valid pada Master List Arsip. Perubahan di masa mendatang wajib menggunakan versi baru (bukan overwrite), dan akses diatur sesuai matriks RBAC (Lampiran C).",
        document: "Master List Arsip Digital",
        responsible: "PIC Pemasaran Cabang",
        output: "Arsip terkunci dengan status Valid dan hak akses final.",
      },
    ],
    faq: [
      {
        question:
          "Bagaimana jika dokumen yang sudah berstatus Valid perlu direvisi (misal adendum MoU)?",
        answer:
          "Dokumen versi lama tidak boleh dihapus/di-overwrite, tapi dipindahkan ke sub-folder 99_Versi_Lama. Perubahan mendapat versi baru: draf kerja pakai desimal (v0.1, v0.2), dan setelah disetujui pimpinan naik ke angka bulat (v1.0, v2.0). Master List wajib diperbarui pada kolom Versi dan Status.",
      },
      {
        question: "Siapa yang berhak mengubah status dokumen menjadi Valid?",
        answer:
          "Hanya PIC Pemasaran Cabang atau Branch Manager yang berwenang mengubah status pada Master List Arsip menjadi Valid.",
      },
    ],
    troubleshooting: [
      "File hilang: cek folder versi lama dan riwayat unggahan.",
      "Akses tertolak: validasi izin folder shared drive.",
    ],
    support: "PIC: Admin Arsip Digital | Internal chat / email support",
  },
  {
    id: "sop-3",
    number: "SOP 3",
    title: "Monitoring dan Pelaporan Status Kerja Sama Sekolah",
    shortTitle: "Monitoring Kerja Sama",
    description:
      "Memantau kesehatan kemitraan sekolah, mendeteksi risiko churn secara dini, dan mengelola siklus renewal kontrak secara proaktif.",
    purpose:
      "Mewujudkan sistem monitoring operasional dan administrasi sekolah mitra yang periodik dan terstandarisasi, menghilangkan ambiguitas kepemilikan penanganan masalah melalui matriks eskalasi yang jelas, memantau Partnership Health guna mendeteksi dini risiko churn, dan mengoptimalkan siklus renewal kontrak secara proaktif demi stabilitas pendapatan cabang.",
    scope:
      "Berlaku bagi seluruh aktivitas pemantauan pasca-penjualan (post-sales monitoring): rekam absensi harian kelas intrakurikuler/ekstrakurikuler, koordinasi mingguan, penagihan invoice, klasifikasi kesehatan mitra, hingga evaluasi akhir semester dan negosiasi perpanjangan kontrak dengan seluruh sekolah mitra.",
    parties: [
      "Teacher / PIC Sekolah",
      "PIC Administrasi & Finance",
      "Branch Coordinator",
      "Branch Manager",
    ],
    documents: [
      "Weekly Operational Report",
      "Admin Status Report",
      "Partnership Health Report",
      "Renewal Tracking Report",
      "Semester Evaluation Report",
    ],
    metadata: {
      documentNumber: "444/ROB/SOP/IV/2026",
      releaseDate: "05 Juli 2026",
      revisionDate: "18 Juli 2026",
      owner: "Branch Manager",
    },
    templatePdf: "pdf/3.pdf",
    steps: [
      {
        title: "Weekly Operational Monitoring",
        activity:
          "Teacher menginput absensi siswa dan capaian materi ke School Educourse maksimal 1×24 jam setelah kelas berakhir. Jika ditemukan isu operasional di lapangan (misal proyektor rusak, siswa tidak kondusif), Teacher mencatatnya ke log isu mingguan. Setiap Kamis malam, Teacher merekap data mingguan per sekolah binaannya ke spreadsheet koordinasi internal.",
        document: "School Educourse + Log Isu Mingguan",
        responsible: "Teacher / PIC Sekolah",
        output:
          "Data absensi & capaian materi terinput; log isu (jika ada) tercatat; rekap mingguan selesai tiap Kamis malam.",
        decision: {
          question: "Apakah ditemukan isu operasional di kelas?",
          description:
            "Menentukan apakah data langsung masuk rekap mingguan, atau perlu dicatat dulu ke log isu untuk dibahas di Weekly Coordination Review.",
          yesLabel: "Ya, catat ke log isu",
          noLabel: "Tidak ada isu",
          yesOutcome:
            "Isu dicatat di log isu mingguan, dibawa ke Weekly Coordination Review untuk pembahasan dan pembagian action item.",
          noOutcome:
            "Data absensi & capaian materi langsung masuk rekap mingguan Kamis malam tanpa catatan isu tambahan.",
        },
      },
      {
        title: "Weekly Coordination Review",
        activity:
          "Setiap Jumat 16.00–17.00 WIB, Teacher, PIC Administrasi, dan Branch Coordinator berkumpul membahas isu operasional minggu berjalan, isu belum terselesaikan, hambatan pembayaran, dan pembagian action item per sekolah untuk pekan depan. Branch Coordinator mendokumentasikan hasil rapat.",
        document: "Weekly Operational Report",
        responsible: "Teacher, PIC Administrasi, Branch Coordinator",
        output:
          "Weekly Operational Report tersusun; action items per sekolah untuk minggu berikutnya terbagi.",
      },
      {
        title: "Administrative Status Monitoring",
        activity:
          "Setiap tanggal 20–25, PIC Administrasi memeriksa linimasa penagihan (invoice wajib terkirim maksimal tanggal 25), melacak status pembayaran overdue, dan mencatat dokumen pendukung yang masih pending. Hasil dituangkan ke Admin Status Report bulanan untuk Branch Manager.",
        document: "Admin Status Report",
        responsible: "PIC Administrasi / Finance",
        output:
          "Admin Status Report bulanan tersusun; status invoice, overdue payment, dan dokumen pending terlacak.",
      },
      {
        title: "Partnership Health Classification",
        activity:
          "Setiap akhir bulan, Branch Coordinator menilai kinerja kemitraan berdasarkan data operasional & administrasi yang terkumpul. Setiap sekolah mitra diklasifikasikan ke salah satu dari 5 status: Active Healthy (kooperatif, kehadiran >85%, pembayaran lancar), Needs Attention (komunikasi lambat/isu kecil berulang), At Risk (tunggakan >30 hari atau komplain belum tuntas), Renewal Pending (sisa kontrak <90 hari, sedang negosiasi), atau Dormant (KBM berhenti sementara/kontrak ditangguhkan).",
        document: "Master Dashboard Monitoring (Health Scoring)",
        responsible: "Branch Coordinator",
        output:
          "Setiap sekolah mitra terklasifikasi ke dalam salah satu dari 5 status Partnership Health.",
      },
      {
        title: "Renewal Monitoring Pipeline",
        activity:
          "Sistem memberi peringatan otomatis saat sisa masa kontrak memasuki rentang 90–60 hari. PIC Administrasi memetakan sekolah ke Renewal Pipeline dengan status Ready Renewal, Need Discussion, High Risk, atau Non-Renewal. Branch Coordinator menyusun draf proposal penawaran perpanjangan berdasarkan status tersebut.",
        document: "Renewal Pipeline Tracker",
        responsible: "PIC Administrasi & Branch Coordinator",
        output:
          "Sekolah dengan kontrak mendekati masa tenggang terpetakan ke Renewal Pipeline dengan status penawaran yang sesuai.",
        decision: {
          question:
            "Apakah sisa masa kontrak sekolah masuk rentang 90–60 hari?",
          description:
            "Menentukan apakah sekolah dipicu masuk Renewal Pipeline untuk proses negosiasi perpanjangan, atau tetap dalam monitoring reguler.",
          yesLabel: "Ya, masuk Renewal Pipeline",
          noLabel: "Belum, tetap monitoring reguler",
          yesOutcome:
            "Sekolah dipetakan ke Renewal Pipeline; Branch Coordinator menyusun draf proposal perpanjangan.",
          noOutcome:
            "Sekolah tetap dalam siklus monitoring reguler (Weekly Monitoring, Health Classification) tanpa trigger renewal.",
        },
      },
      {
        title: "Semester Evaluation Meeting",
        activity:
          "Di akhir semester, Educourse.id menyelenggarakan rapat evaluasi formal eksternal dengan Kepala Sekolah/PIC Yayasan Mitra, menyajikan Semester Evaluation Report berisi performa program, umpan balik sekolah, tantangan operasional, dan rekomendasi kurikulum. Ditutup dengan penandatanganan lembar kesepakatan keberlanjutan atau MoU/PKS baru.",
        document: "Semester Evaluation Report + MoU/PKS",
        responsible: "Seluruh Pihak Internal & Pimpinan Sekolah Mitra",
        output:
          "Semester Evaluation Report diserahkan; kesepakatan keberlanjutan atau MoU/PKS baru ditandatangani.",
      },
    ],
    faq: [
      {
        question:
          "Bagaimana rute eskalasi untuk isu akademik (kelas, materi, siswa)?",
        answer:
          "Ditangani langsung oleh Teacher di hari yang sama. Jika dalam 3 hari belum tuntas, dilaporkan ke Branch Coordinator.",
      },
      {
        question:
          "Bagaimana rute eskalasi untuk isu administratif (pembayaran, kuitansi, dokumen kontrak)?",
        answer:
          "Ditangani oleh PIC Administrasi dengan mengirimkan surat penagihan atau surat pengingat formal ke sekolah mitra.",
      },
      {
        question:
          "Bagaimana rute eskalasi untuk isu strategis (ancaman pemutusan kontrak, komplain keras yayasan)?",
        answer:
          "Branch Coordinator melakukan verifikasi data, lalu menyerahkan penanganan penuh ke Branch Manager untuk pertemuan tingkat tinggi (High-Level Meeting) dengan pimpinan sekolah.",
      },
    ],
    troubleshooting: [
      "Data sekolah tidak lengkap: lengkapi identitas institusi sebelum membuat laporan.",
      "Status overlap: cek kembali catatan follow-up terakhir dan periode laporan.",
    ],
    support: "PIC: Relationship Officer | Koordinator Cabang Bandung",
  },
  {
    id: "sop-4",
    number: "SOP 4",
    title: "Pengelolaan MoU dan PKS",
    shortTitle: "MoU & PKS",
    description:
      "Mengelola siklus hidup dokumen kerja sama sekolah (MoU dan PKS) dari inisiasi, penyusunan, penandatanganan, hingga pengarsipan dan monitoring masa berlaku.",
    purpose:
      "Mewujudkan tertib administrasi dalam proses inisiasi hingga pemeliharaan dokumen hukum kerja sama, menghilangkan ketiadaan tracking status dan version control, menjamin ketepatan pemantauan masa berlaku dokumen untuk memitigasi risiko hukum, dan menyediakan basis data legalitas kemitraan yang terintegrasi dan transparan.",
    scope:
      "Berlaku untuk seluruh siklus dokumen legalitas eksternal: Memorandum of Understanding (MoU) sebagai kesepahaman awal pra-kontrak, dan Perjanjian Kerja Sama (PKS) sebagai kontrak pelaksanaan operasional. Siklus status dokumen mengikuti 10 tahap: Drafting, Reviewing, Ready for Signing, Signed, Archived, Active, Renewal Review, Expiring Soon, Expired, hingga Closed/Terminated.",
    parties: [
      "Staf Marketing",
      "PIC Sekolah",
      "Branch Manager",
      "Pimpinan Sekolah Mitra",
    ],
    documents: [
      "Form Inisiasi Kerja Sama",
      "Lembar Checklist Review",
      "Master List Dokumen Kerja Sama (Google Sheets)",
      "Cetakan MoU/PKS + Meterai Rp10.000",
    ],
    metadata: {
      documentNumber: "445/ROB/SOP/IV/2026",
      releaseDate: "15 Maret 2026",
      revisionDate: "01 Juli 2026",
      owner: "Branch Manager",
    },
    templatePdf: "pdf/4.pdf",
    steps: [
      {
        title: "Inisiasi Kerja Sama",
        activity:
          "Setelah sekolah menyatakan minat, Staf Marketing melakukan audiensi untuk mengidentifikasi kebutuhan program (Intrakurikuler/Ekstrakurikuler). Hasil identifikasi dituangkan ke Form Inisiasi Kerja Sama untuk menentukan apakah kemitraan membutuhkan MoU (kesepahaman awal) atau langsung ke PKS (kontrak teknis).",
        document: "Form Inisiasi Kerja Sama",
        responsible: "Staf Marketing",
        output:
          "Kebutuhan program teridentifikasi; jenis dokumen (MoU/PKS) ditentukan.",
      },
      {
        title: "Registrasi Dokumen Kerja Sama",
        activity:
          "Sebelum menyusun draf teks, Staf Marketing membuka Master List Dokumen Kerja Sama di Google Sheets, membuat baris baru, dan mengisi kolom Nomor Dokumen, Nama Sekolah, Jenis Dokumen (MoU/PKS), Tanggal Dibuat, PIC Pemasaran, Versi (v1.0), lalu mengubah Status menjadi Drafting.",
        document: "Master List Dokumen Kerja Sama (Google Sheets)",
        responsible: "Staf Marketing",
        output: "Entri baru tercatat di Master List dengan status Drafting.",
      },
      {
        title: "Penyusunan Draft Dokumen",
        activity:
          "Staf Marketing mengunduh master template kosong dari folder 00_Template_&_Panduan, lalu menyusun draf dengan struktur penamaan file baku: [MOU/PKS]-[KODE SEKOLAH]-[TAHUN]-[VERSI]. Contoh: MOU-ASPUT-2026-v1.0.",
        document: "Master Template MoU/PKS",
        responsible: "Staf Marketing",
        output: "Draf dokumen v1.0 tersusun dengan nama file sesuai standar.",
      },
      {
        title: "Review Internal",
        activity:
          "Staf Marketing menyerahkan draf kepada Branch Manager dan PIC Sekolah menggunakan Lembar Checklist Review. Poin yang wajib diperiksa: kesesuaian ruang lingkup program koding, periode pelaksanaan kelas, hak dan kewajiban sarana, serta ketentuan administrasi keuangan (nilai kontrak/bagi hasil).",
        document: "Lembar Checklist Review",
        responsible: "Branch Manager & PIC Sekolah",
        output:
          "Draf tervalidasi secara internal, siap dikirim ke pihak sekolah.",
      },
      {
        title: "Review Mitra Sekolah",
        activity:
          "Draf dikirimkan ke pihak sekolah via email resmi atau tautan cloud storage (hak akses commenter/viewer). Pihak sekolah memeriksa isi draf.",
        document: "Draf MoU/PKS (Cloud Storage - Commenter Access)",
        responsible: "Staf Marketing & Pimpinan Sekolah Mitra",
        output: "Draf disetujui tanpa catatan, atau masuk ke tahap revisi.",
        decision: {
          question: "Apakah pihak sekolah menyetujui draf tanpa catatan?",
          description:
            "Menentukan apakah proses langsung lanjut ke Approval Final, atau harus melalui Revision Management terlebih dahulu.",
          yesLabel: "Ya, tanpa catatan",
          noLabel: "Ada masukan/revisi",
          yesOutcome: "Proses langsung berlanjut ke Langkah 7: Approval Final.",
          noOutcome:
            "Dokumen masuk ke Langkah 6: Revision Management untuk dicatat di Revision Log dan direvisi, sebelum diajukan ulang untuk direview.",
        },
      },
      {
        title: "Revision Management",
        activity:
          "Setiap perubahan kata, kalimat, atau pasal dicatat pada tabel Revision Log di draf. Minor Revision (perubahan redaksional, misal typo) menaikkan versi desimal: v1.0 → v1.1. Major Revision (perubahan prinsip dasar, misal nominal biaya atau durasi kontrak) menaikkan versi angka bulat: v1.0 → v2.0.",
        document: "Revision Log (tersemat di draf dokumen)",
        responsible: "Staf Marketing",
        output:
          "Perubahan tercatat di Revision Log dengan versi dokumen yang diperbarui.",
      },
      {
        title: "Approval Final",
        activity:
          "Setelah seluruh revisi disepakati kedua belah pihak, Branch Manager memberikan approval final digital atau paraf pada draf kerja. Staf Marketing memperbarui status dokumen di Master List menjadi Ready for Signing.",
        document: "Master List Dokumen Kerja Sama",
        responsible: "Branch Manager",
        output:
          "Draf mendapat approval final; status berubah menjadi Ready for Signing.",
      },
      {
        title: "Penandatanganan Dokumen",
        activity:
          "Staf Marketing mencetak dokumen 2 rangkap asli, menempelkan meterai Rp10.000 secara silang pada bagian tanda tangan (Rangkap 1: meterai di sisi Educourse; Rangkap 2: meterai di sisi Sekolah). Kedua pimpinan menandatangani dokumen fisik dan membubuhkan cap stempel resmi. Status di Master List berubah menjadi Signed.",
        document: "Dokumen MoU/PKS bermeterai (2 rangkap asli)",
        responsible: "Branch Manager & Pimpinan Sekolah Mitra",
        output: "Dokumen ditandatangani sah di atas meterai; status Signed.",
      },
      {
        title: "Pengarsipan Terintegrasi",
        activity:
          "Dokumen fisik yang telah ditandatangani dipindai (PDF/OCR resolusi tinggi) dan diunggah maksimal 1×24 jam ke Folder Google Drive Cabang (02_Marketing/02_MoU atau folder dinamis nama sekolah) dan School Educourse. Kolom link dokumen di Master List diperbarui dan status diubah menjadi Archived.",
        document: "Google Drive + School Educourse + Master List",
        responsible: "Staf Marketing",
        output: "Berkas digital terarsip di seluruh sistem; status Archived.",
      },
    ],
    faq: [
      {
        question:
          "Apa yang terjadi saat kontrak MoU/PKS mendekati masa habis berlaku?",
        answer:
          "Master List Google Sheets menghitung Sisa Hari = Tanggal Akhir Kontrak - Tanggal Hari Ini. Status dokumen bergerak dari Active → Renewal Review (H-180 s.d H-30) → Expiring Soon (<30 hari) → Expired jika tidak ditindaklanjuti.",
      },
      {
        question:
          "Apa langkah setelah evaluasi kontrak: lanjut (renewal) atau berhenti (termination)?",
        answer:
          "Jika renewal, staf kembali ke Langkah 1 untuk memproses naskah PKS/MoU periode baru. Jika termination, status diubah menjadi Closed/Terminated dan seluruh berkas digital dipindahkan ke sub-folder 99_Versi_Lama/Historis.",
      },
      {
        question:
          "Siapa yang berwenang mengubah struktur klausul inti master template?",
        answer:
          "Dilarang keras mengubah struktur klausul inti tanpa instruksi tertulis atau persetujuan penasihat hukum pusat/Branch Manager.",
      },
    ],
    troubleshooting: [
      "Lampiran tidak lengkap: cek checklist sebelum diajukan ke pimpinan.",
      "Nomor dokumen ganda: gunakan pola penomoran baku di metadata.",
    ],
    support: "PIC: Admin Legal/Administrasi | Koordinator Cabang",
  },
  {
    id: "sop-5",
    number: "SOP 5",
    title: "Koordinasi Administrasi Program dan Pengajuan RAB Kegiatan Sekolah",
    shortTitle: "Koordinasi Program & RAB",
    description:
      "Mengelola siklus hidup administrasi kegiatan sekolah (Workshop, Trial Class, Competition, Seminar) dari inisiasi, penyusunan proposal & RAB, eksekusi lapangan, hingga pelaporan dan pengarsipan pasca-kegiatan.",
    purpose:
      "Mewujudkan tata kelola keuangan yang transparan dan terukur melalui standarisasi proposal, RAB, dan proyeksi pendapatan; mengeliminasi perubahan agenda mendadak yang tidak terdokumentasi melalui Change Request Management; memastikan ketepatan linimasa program dan pengarsipan digital pasca-kegiatan; serta menjaga ROI dari setiap program yang diselenggarakan.",
    scope:
      "Berlaku untuk seluruh administrasi pelaksanaan ajang edukasi pendukung pemasaran bersama sekolah mitra, dari inisiasi pengajuan, tinjauan internal, pencairan anggaran, manajemen perubahan lapangan, laporan pertanggungjawaban keuangan, hingga pengarsipan dokumen final. Status kegiatan mengikuti 7 tahap: Initiation, Drafting & Review, Approved, On Schedule, Delayed, Completed, dan Archived.",
    parties: [
      "Staf Marketing",
      "Pelaksana Program / Tutor",
      "Branch Manager",
      "Director Manager",
      "Finance Pusat",
    ],
    documents: [
      "Project Request Form",
      "Proposal Kegiatan & Lembar RAB (Revenue Projection)",
      "Change Request Form",
      "Project Completion Report",
    ],
    metadata: {
      documentNumber: "446/ROB/SOP/IV/2026",
      releaseDate: "30 Maret 2026",
      revisionDate: "01 Juli 2026",
      owner: "Branch Manager",
    },
    templatePdf: "pdf/5.pdf",
    steps: [
      {
        title: "Project Request Initiation & Registrasi",
        activity:
          "Begitu ada permintaan kegiatan (dari sekolah, pusat, atau internal), Staf Marketing mengisi Project Request Form untuk mengunci parameter awal (Project ID, Nama Sekolah, Nama Kegiatan, Target Peserta), lalu menginput data tersebut ke Project Monitoring Dashboard dengan status awal Initiation.",
        document: "Project Request Form + Project Monitoring Dashboard",
        responsible: "Staf Marketing",
        output:
          "Parameter kegiatan terkunci; entri baru tercatat dengan status Initiation.",
      },
      {
        title: "Penyusunan Konsep Program",
        activity:
          "Pelaksana Program menyusun spesifikasi teknis lapangan dalam Draft Konsep Program, mencakup tujuan instruksional, susunan acara (rundown), pembagian tugas SDM pengajar, daftar kebutuhan alat robotik/koding, dan materi ajar.",
        document: "Draft Konsep Program",
        responsible: "Pelaksana Program / Tutor",
        output: "Draft Konsep Program dengan spesifikasi teknis lengkap.",
      },
      {
        title: "Penyusunan Proposal dan RAB Terintegrasi",
        activity:
          "Staf Marketing menggabungkan aspek teknis ke dalam proposal formal, lalu menyusun lembar RAB yang dilengkapi Revenue Projection (Estimasi Pemasukan, Estimasi Keuntungan Bersih, dan ROI Sederhana) untuk memastikan kegiatan bernilai ekonomis bagi cabang.",
        document: "Proposal Kegiatan + Lembar RAB & Proyeksi Laba",
        responsible: "Staf Marketing & Pelaksana Program",
        output: "Paket proposal dan RAB terintegrasi siap direview.",
      },
      {
        title: "Internal Review",
        activity:
          "Branch Manager memeriksa paket dokumen draf melalui pertemuan internal, mencakup kelayakan beban kerja staf, ketersediaan alat, dan rasio biaya terhadap proyeksi pendapatan.",
        document: "Paket Proposal & RAB",
        responsible: "Branch Manager",
        output: "Status diubah menjadi Review, atau dikembalikan untuk revisi.",
        decision: {
          question: "Apakah paket proposal dan RAB sesuai kelayakan?",
          description:
            "Menentukan apakah dokumen lanjut ke tahap Approval Kegiatan, atau harus direvisi ulang di tahap penyusunan proposal.",
          yesLabel: "Ya, lanjut approval",
          noLabel: "Tidak, revisi dulu",
          yesOutcome:
            "Status diubah menjadi Review, dokumen diteruskan ke Director Manager untuk Approval Kegiatan & Budget Release.",
          noOutcome:
            "Dokumen dikembalikan ke Langkah 3 (Penyusunan Proposal dan RAB) untuk direvisi.",
        },
      },
      {
        title: "Approval Kegiatan & Budget Release",
        activity:
          "Branch Manager meneruskan draf terverifikasi kepada Director Manager untuk Final Approval. Setelah disetujui (status Approved), Finance Pusat mencatat rincian transaksi pada Budget Tracking Sheet (Nominal Disetujui, Tanggal Cair, PIC) dan mentransfer dana operasional ke rekening resmi Branch Manager.",
        document: "Budget Tracking Sheet",
        responsible: "Director Manager & Finance",
        output:
          "Anggaran disetujui (status Approved); dana operasional cair ke Branch Manager.",
      },
      {
        title: "Project Execution & Pengendalian Lapangan",
        activity:
          "Tim bergerak ke lapangan mengeksekusi kegiatan sesuai manual kerja proposal, status dashboard diperbarui menjadi On Schedule. Jika terjadi kondisi kahar atau perubahan mendadak (pergeseran jadwal, lonjakan peserta, perubahan lokasi, pembengkakan biaya logistik), pelaksana wajib mengisi Change Request Form sebelum mengeksekusi perubahan — dilarang mengambil keputusan sepihak.",
        document: "Change Request Form (jika diperlukan)",
        responsible: "Pelaksana Program & Staf Marketing",
        output:
          "Kegiatan berjalan sesuai rencana, atau perubahan disetujui via Change Request.",
        decision: {
          question:
            "Apakah terjadi perubahan mendadak di lapangan (force majeure)?",
          description:
            "Menentukan apakah eksekusi berjalan sesuai rencana awal, atau harus melalui Change Request Management sebelum perubahan boleh dilaksanakan.",
          yesLabel: "Ya, ajukan Change Request",
          noLabel: "Tidak, sesuai rencana awal",
          yesOutcome:
            "Form Change Request (Project ID, Jenis Perubahan, Alasan, Dampak Anggaran, Dampak Jadwal) dikirim untuk instant approval Branch Manager. Jika disetujui, perubahan dilaksanakan dan status dashboard disesuaikan (menjadi Delayed jika berdampak jadwal).",
          noOutcome:
            "Kegiatan berjalan sesuai rencana awal tanpa perubahan, status tetap On Schedule hingga kegiatan selesai.",
        },
      },
      {
        title: "Monitoring dan Pelaporan Pasca-Event",
        activity:
          "Maksimal 3×24 jam setelah kegiatan selesai (status Completed), tim menyusun Project Completion Report yang melampirkan Realisasi RAB (perbandingan dana cair vs nota riil, termasuk pengembalian sisa dana), Dokumentasi Kegiatan (foto/video), dan Evaluasi Kegiatan (ketercapaian target, kendala, rekomendasi tindak lanjut).",
        document: "Project Completion Report",
        responsible: "Pelaksana Program & Staf Marketing",
        output:
          "Project Completion Report tersusun lengkap dengan 3 dokumen inti.",
      },
      {
        title: "Pengarsipan Digital Terintegrasi",
        activity:
          "Setelah laporan divalidasi Branch Manager, Staf Marketing mengalihmediakan seluruh dokumen pendukung (Project Request, Proposal, RAB, Change Request, Dokumen Realisasi) menjadi satu berkas PDF komprehensif, diunggah ke folder Google Drive Cabang (02_Marketing/01_Program_Event/[Nama_Sekolah]), dan memperbarui status akhir di Master List Kegiatan menjadi Archived.",
        document: "Google Drive Cabang + Master List Kegiatan",
        responsible: "Staf Marketing",
        output:
          "Seluruh dokumen kegiatan terarsip digital; status akhir Archived.",
      },
    ],
    faq: [
      {
        question:
          "Berapa batas toleransi perubahan anggaran tanpa Change Request?",
        answer:
          "Maksimal 5% dari total RAB awal, dengan syarat tertutupi oleh dana tak terduga yang sudah dianggarkan sebelumnya. Di luar itu wajib mengisi Change Request Form.",
      },
      {
        question:
          "Apa konsekuensi jika nota pengeluaran terlambat dikumpulkan?",
        answer:
          "Keterlambatan pengumpulan nota lebih dari 3×24 jam mengakibatkan penangguhan penandatanganan pengajuan dana operasional bagi pelaksana tersebut untuk kegiatan berikutnya.",
      },
    ],
    troubleshooting: [
      "RAB belum lengkap: cek seluruh komponen biaya dan lampiran pendukung.",
      "Approval lambat: pastikan dokumen sudah masuk antrian review yang benar.",
    ],
    support: "PIC: Koordinator Program | Admin Administrasi | Keuangan",
  },
];

function slugLabel(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderQuickAccess() {
  const container = document.getElementById("quickAccessGrid");
  container.innerHTML = quickAccessItems
    .map(
      (item) => `
        <article class="resource-card quick-card">
          <span class="resource-tag">Quick Access</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <a class="button ghost small" href="${item.href}" target="_blank" rel="noreferrer">${escapeHtml(item.action)}</a>
        </article>
      `,
    )
    .join("");
}

function renderResources() {
  const container = document.getElementById("resourceGrid");
  container.innerHTML = resourceItems
    .map(
      (item) => `
        <article class="resource-card">
          <span class="resource-tag">${escapeHtml(item.tag)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `,
    )
    .join("");
}

function renderCatalog() {
  const container = document.getElementById("sopCatalog");
  container.innerHTML = sopData
    .map(
      (sop) => `
        <article class="catalog-card">
          <div class="catalog-head">
            <span>${escapeHtml(sop.number)}</span>
            <a class="catalog-link" href="${sop.id}.html">Buka halaman</a>
          </div>
          <h3>${escapeHtml(sop.title)}</h3>
          <p>${escapeHtml(sop.description)}</p>
          <div class="catalog-foot">
            <span>${escapeHtml(sop.metadata.documentNumber)}</span>
            <span>${escapeHtml(sop.shortTitle)}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFlowchartDetail(
  step,
  index,
  totalSteps,
  selectedDecision = null,
  sopId = "",
) {
  const nextIndex = index + 1 < totalSteps ? index + 1 : index;
  const previousIndex = index > 0 ? index - 1 : 0;
  const hasDecision = Boolean(step.decision);

  return `
    <div class="flow-detail-head">
      <span class="flow-step-index">Langkah ${index + 1}</span>
      <h4>${escapeHtml(step.title)}</h4>
    </div>
    <p class="flow-activity">${escapeHtml(step.activity)}</p>
    <dl class="detail-matrix">
      <div>
        <dt>Dokumen/Form</dt>
        <dd>${escapeHtml(step.document)}</dd>
      </div>
      <div>
        <dt>Penanggung Jawab</dt>
        <dd>${escapeHtml(step.responsible)}</dd>
      </div>
      <div>
        <dt>Output</dt>
        <dd>${escapeHtml(step.output)}</dd>
      </div>
    </dl>
    ${
      hasDecision
        ? `
          <div class="decision-box">
            <span class="resource-tag">If / Else</span>
            <h5>${escapeHtml(step.decision.question)}</h5>
            <p>${escapeHtml(step.decision.description)}</p>
            <div class="decision-actions">
              <button class="button secondary small flow-decision" type="button" data-flow-decision="yes" onclick="setActiveFlowStep('${sopId}', ${index}, 'yes')">${escapeHtml(step.decision.yesLabel)}</button>
              <button class="button primary small flow-decision" type="button" data-flow-decision="no" onclick="setActiveFlowStep('${sopId}', ${index}, 'no')">${escapeHtml(step.decision.noLabel)}</button>
            </div>
            <div class="decision-output">
                <div class="${selectedDecision === "yes" ? "selected" : ""}">
                <strong>Cabang Ya</strong>
                <p>${escapeHtml(step.decision.yesOutcome)}</p>
              </div>
                <div class="${selectedDecision === "no" ? "selected" : ""}">
                <strong>Cabang Tidak</strong>
                <p>${escapeHtml(step.decision.noOutcome)}</p>
              </div>
            </div>
          </div>
        `
        : ""
    }
    <div class="flow-actions">
      <button class="button secondary small flow-nav" type="button" data-flow-target="${previousIndex}" onclick="setActiveFlowStep('${sopId}', ${previousIndex})">Langkah sebelumnya</button>
      <button class="button primary small flow-nav" type="button" data-flow-target="${nextIndex}" onclick="setActiveFlowStep('${sopId}', ${nextIndex})">Langkah berikutnya</button>
    </div>
  `;
}

function renderSopPage(sopId) {
  const sop = sopData.find((entry) => entry.id === sopId) || sopData[0];
  const container = document.getElementById("pageRoot");
  if (!container || !sop) {
    return;
  }

  const stepButtons = sop.steps
    .map(
      (step, index) => `
        <button class="flow-step ${index === 0 ? "active" : ""}" type="button" data-sop-id="${sop.id}" data-step-index="${index}" onclick="setActiveFlowStep('${sop.id}', ${index})">
          <span>${index + 1}</span>
          <strong>${escapeHtml(step.title)}</strong>
        </button>
      `,
    )
    .join("");

  const faqItems = sop.faq
    .map(
      (item) => `
        <details>
          <summary>${escapeHtml(item.question)}</summary>
          <p>${escapeHtml(item.answer)}</p>
        </details>
      `,
    )
    .join("");

  const troubleItems = sop.troubleshooting
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const partyItems = sop.parties
    .map((party) => `<li>${escapeHtml(party)}</li>`)
    .join("");
  const documentItems = sop.documents
    .map((doc) => `<li>${escapeHtml(doc)}</li>`)
    .join("");
  const stepIndex = Number(container.dataset.activeStep || 0);

  container.innerHTML = `
    <section id="${sop.id}" class="panel sop-page" data-sop-page="${sop.id}">
      <div class="page-header">
        <div>
          <span class="section-label">${escapeHtml(sop.number)}</span>
          <h2>${escapeHtml(sop.title)}</h2>
          <p>${escapeHtml(sop.description)}</p>
        </div>
        <div class="page-badge">${escapeHtml(sop.metadata.documentNumber)}</div>
      </div>

      <div class="breadcrumb-row">
        <a class="button ghost small" href="index.html">Kembali ke Dashboard</a>
        <div class="breadcrumb-links">
          ${sopData
            .map(
              (entry) =>
                `<a class="breadcrumb-chip ${entry.id === sop.id ? "active" : ""}" href="${entry.id}.html">${escapeHtml(entry.number)}</a>`,
            )
            .join("")}
        </div>
      </div>

      <div class="metadata-strip">
        <article>
          <span>Nomor Dokumen</span>
          <strong>${escapeHtml(sop.metadata.documentNumber)}</strong>
        </article>
        <article>
          <span>Tanggal Terbit</span>
          <strong>${escapeHtml(sop.metadata.releaseDate)}</strong>
        </article>
        <article>
          <span>Tanggal Revisi</span>
          <strong>${escapeHtml(sop.metadata.revisionDate)}</strong>
        </article>
        <article>
          <span>Penanggung Jawab</span>
          <strong>${escapeHtml(sop.metadata.owner)}</strong>
        </article>
      </div>

      <div class="sop-layout">
        <article class="sop-copy">
          <div class="card-heading">
            <span class="card-kicker">Deskripsi SOP</span>
            <h3>Ringkasan operasional</h3>
          </div>
          <p>${escapeHtml(sop.purpose)}</p>
          <h4>Tujuan SOP</h4>
          <p>${escapeHtml(sop.purpose)}</p>
          <h4>Ruang Lingkup</h4>
          <p>${escapeHtml(sop.scope)}</p>

          <div class="list-grid">
            <div>
              <h4>Pihak yang Terlibat</h4>
              <ul>${partyItems}</ul>
            </div>
            <div>
              <h4>Dokumen Pendukung</h4>
              <ul>${documentItems}</ul>
            </div>
          </div>

          <div class="template-actions">
            <a class="button primary" href="${sop.templatePdf}" target="_blank" rel="noreferrer">Download PDF SOP/form</a>
            <a class="button secondary" href="https://drive.google.com/drive/folders/1U0-ir5Tkxr20-MLisprV0yK8vAs4hRu3?usp=sharing" target="_blank" rel="noreferrer">Open template folder</a>
          </div>

          <div class="support-box">
            <span>PIC dan kontak support</span>
            <strong>${escapeHtml(sop.support)}</strong>
          </div>
        </article>

        <article class="flowchart-card">
          <div class="card-heading">
            <span class="card-kicker">Flowchart Interaktif</span>
            <h3>Alur proses dan cabang keputusan</h3>
          </div>
          <div class="flowchart-visual">
            <div class="flow-start">Start</div>
            <div class="flow-line"></div>
            <div class="flow-node-grid">
              ${stepButtons}
            </div>
          </div>
          <div class="flowchart-detail" data-flow-detail="${sop.id}" data-active-step="${stepIndex}">${renderFlowchartDetail(
            sop.steps[stepIndex] || sop.steps[0],
            stepIndex,
            sop.steps.length,
            null,
            sop.id,
          )}</div>
        </article>
      </div>

      <div class="sop-bottom-grid">
        <article class="info-panel">
          <div class="card-heading">
            <span class="card-kicker">FAQ</span>
            <h3>Pertanyaan umum</h3>
          </div>
          <div class="faq-list">${faqItems}</div>
        </article>

        <article class="info-panel">
          <div class="card-heading">
            <span class="card-kicker">Troubleshooting</span>
            <h3>Masalah yang sering muncul</h3>
          </div>
          <ul class="bullet-list">${troubleItems}</ul>
        </article>

        <article class="info-panel preview-panel">
          <div class="card-heading">
            <span class="card-kicker">Preview Template</span>
            <h3>Dokumen referensi</h3>
          </div>
          <iframe src="${sop.templatePdf}" loading="lazy" title="Preview ${escapeHtml(sop.title)}"></iframe>
        </article>
      </div>
    </section>
  `;

  bindFlowchartInteractions(sop.id);
}

function setActiveFlowStep(sopId, stepIndex, selectedDecision = null) {
  const sop = sopData.find((entry) => entry.id === sopId);
  if (!sop) {
    return;
  }

  const flowContainer = document.querySelector(`[data-flow-detail="${sopId}"]`);
  const stepButtons = document.querySelectorAll(`[data-sop-id="${sopId}"]`);
  const selectedStep = sop.steps[stepIndex];

  if (!flowContainer || !selectedStep) {
    return;
  }

  flowContainer.dataset.activeStep = String(stepIndex);
  flowContainer.dataset.activeDecision = selectedDecision || "";
  flowContainer.innerHTML = renderFlowchartDetail(
    selectedStep,
    stepIndex,
    sop.steps.length,
    selectedDecision,
    sopId,
  );
  stepButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      Number(button.dataset.stepIndex) === stepIndex,
    );
  });

  flowContainer.querySelectorAll(".flow-nav").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFlowStep(sopId, Number(button.dataset.flowTarget));
    });
  });

  flowContainer.querySelectorAll(".flow-decision").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFlowStep(sopId, stepIndex, button.dataset.flowDecision);
    });
  });
}

function bindFlowchartInteractions(sopId) {
  const container = document.querySelector(`[data-flowchart="${sopId}"]`);
  if (!container) {
    return;
  }

  container.querySelectorAll(".flow-step").forEach((stepButton) => {
    stepButton.addEventListener("click", () => {
      setActiveFlowStep(
        stepButton.dataset.sopId,
        Number(stepButton.dataset.stepIndex),
      );
    });
  });
}

function renderDashboard() {
  renderQuickAccess();
  renderResources();
  renderCatalog();
}

function bindNavigation() {
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      menuButton.classList.toggle("active");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

      if (mainNav) {
        mainNav.classList.remove("open");
      }
      if (menuButton) {
        menuButton.classList.remove("active");
      }
    });
  });
}

function scrollToHashTarget() {
  const hashId = window.location.hash.replace("#", "");
  if (!hashId) {
    return;
  }

  const target = document.getElementById(hashId);
  if (target) {
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
}

function initializeApp() {
  const pageType = document.body.dataset.pageType || "dashboard";

  if (pageType === "sop") {
    renderSopPage(document.body.dataset.sopId || "sop-1");
  } else {
    renderDashboard();
  }

  bindNavigation();
  scrollToHashTarget();

  window.addEventListener("hashchange", scrollToHashTarget);
}

initializeApp();
