[![progress-banner](https://backend.codecrafters.io/progress/bittorrent/4543882c-7987-4783-821b-5078bbad0fc3)](https://app.codecrafters.io/users/codecrafters-bot?r=2qF)

This is a starting point for TypeScript solutions to the
["Build Your Own BitTorrent" Challenge](https://app.codecrafters.io/courses/bittorrent/overview).

In this challenge, you’ll build a BitTorrent client that's capable of parsing a
.torrent file and downloading a file from a peer. Along the way, we’ll learn
about how torrent files are structured, HTTP trackers, BitTorrent’s Peer
Protocol, pipelining and more.

**Note**: If you're viewing this repo on GitHub, head over to
[codecrafters.io](https://codecrafters.io) to try the challenge.

# Passing the first stage

The entry point for your BitTorrent implementation is in `app/main.ts`. Study
and uncomment the relevant code, and push your changes to pass the first stage:

```sh
git add .
git commit -m "pass 1st stage" # any msg
git push origin master
```

Time to move on to the next stage!

# Stage 2 & beyond

Note: This section is for stages 2 and beyond.

1. Ensure you have `bun (1.1)` installed locally
1. Run `./your_bittorrent.sh` to run your program, which is implemented in
   `app/main.ts`.
1. Commit your changes and run `git push origin master` to submit your solution
   to CodeCrafters. Test output will be streamed to your terminal.
