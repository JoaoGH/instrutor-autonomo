import React from 'react';
import { SITE_CONTENT } from '../data/content';

export default function Announcement() {
  const { announcement, contact } = SITE_CONTENT;

  return (
    <div className="bg-navy-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-navy-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-brand-400 animate-pulse-dot"></span>
          <span className="font-medium text-emerald-300">{announcement.badge}:</span>
          <span>{announcement.text}</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
            <i className="fa-solid fa-shield-halved text-brand-400"></i> {announcement.detranBadge}
          </span>
          <a
            href={`tel:${contact.phoneTel}`}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition"
          >
            <i className="fa-solid fa-phone text-brand-400"></i> {contact.phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
}
