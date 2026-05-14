**Topic:** Choosing YouTube embeds over GIFs for portfolio demos
**Audience:** Frontend devs, anyone who cares about web perf
**Screenshot prompt:** Side-by-side Network panel screenshots. Left: a portfolio page with autoplay GIF, total payload ~20MB. Right: the same page with a click-to-play YouTube facade, initial payload ~50KB. Or just a screen recording of the facade pattern in action.
**Optimal post day:** Wednesday morning Pacific (lighter post, midweek momentum)

---

Old portfolio: autoplay GIFs of my work. 20+ MB per page load. Mobile users on cellular: pain.

New portfolio: YouTube facade pattern.

The trick: instead of embedding a YouTube iframe (heavy — pulls a megabyte of JS and starts a player engine), embed an `<img>` of the thumbnail. Hand-wire a play button. When the user clicks, *then* swap in the iframe with `autoplay=1`.

Result:

- Initial paint cost: ~50KB for six video tiles (just the thumbnails).
- Click-to-play feels native — same one-tap experience as a real embed.
- Zero YouTube JavaScript runs unless someone actually wants to watch.
- Lighthouse stops complaining.
- Mobile data plans recover.

Code is something like:

```tsx
{activated
  ? <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} loading="lazy" />
  : <button onClick={() => setActivated(true)}>
      <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} loading="lazy" />
      <PlayIcon />
    </button>}
```

That's the whole thing. ~30 lines including the styled play button.

The lesson is bigger than YouTube embeds. Every "convenience" component (third-party widgets, social embeds, A/B testing snippets) is a perf debt you take on by default. The fix is almost always: render a facade, defer the heavy thing until proven needed.

If you're auditing a slow site this week, search your repo for `<iframe>` and `<script src=`. That's where the time went.
