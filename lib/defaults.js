// lib/defaults.js — Default seed data (backend only, never shipped to client)
//
// RFL Season 1 is a brand-new league with no completed seasons yet, so the
// archive, all-star, and season data all start empty. seedIfEmpty() only
// fills keys that are still missing, so this is safe to keep in place as
// the league plays through its first season — nothing here will ever
// overwrite real data once it exists.
//
// DEFAULT_RECORDS is the exception: the /api/records endpoint can only
// update an existing key, not create new ones, so the categories below
// exist as unset placeholders (value 0, holder "—") ready for the first
// admin update once Season 1 produces its first single-game record.

const DEFAULT_ALLSTAR = {};

const DEFAULT_RECORDS = {
  passyd: { label: 'Passing Yards',    value: 0, holder: '—', team: '—' },
  rushyd: { label: 'Rushing Yards',    value: 0, holder: '—', team: '—' },
  recyd:  { label: 'Receiving Yards',  value: 0, holder: '—', team: '—' },
  td:     { label: 'Total Touchdowns', value: 0, holder: '—', team: '—' },
  sacks:  { label: 'Sacks',            value: 0, holder: '—', team: '—' },
  int:    { label: 'Interceptions',    value: 0, holder: '—', team: '—' },
};

const DEFAULT_SEASONS = [];

module.exports = { DEFAULT_ALLSTAR, DEFAULT_RECORDS, DEFAULT_SEASONS };
