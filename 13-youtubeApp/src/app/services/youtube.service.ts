import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  private youtubeUrl: string = "https://www.googleapis.com/youtube/v3";
  private apikey: string = "AIzaSyALbcUX59_wA3NtUi_cFCzhE3tAd5QqXb4";
  private playlist: string = "UUXxg0QcUky0d0C20Ua35dyQ";
  private nextPageToken: string = "";

  constructor(public http: HttpClient) {}

  getVideos() {
    let url = `${this.youtubeUrl}/playlistItems`;
    let parametros = new HttpParams()
      .set("part", "snippet")
      .set("maxResults", "10")
      .set("playlistId", this.playlist)
      .set("key", this.apikey);

    return this.http.get(url, { params: parametros }).pipe(
      map(res => {
        console.log(res);
        this.nextPageToken = res["nextPageToken"];
        console.log(this.nextPageToken);

        let videos: any[] = [];

        for (let video of res["items"]) {
          let snippet = video.snippet;
          videos.push(snippet);
        }

        return videos;
      })
    );
  }
}
