<script lang="ts">
  export let organizer: Organizer
  const {
    name,
    title,
    profile,
    description,
    socialMediaType,
    socialMediaLink,
    socialMediaType2,
    socialMediaLink2,
  } = organizer
</script>

<div>
  <div>name: {name}</div>
  <div>title: {title}</div>
  <img class="w-40" src={profile?.url} alt="img" />
  <div>description: {description}</div>
  <div>socialMediaType: {socialMediaType}</div>
  <a href={socialMediaLink}>{socialMediaLink}</a>
  <div>socialMediaType2: {socialMediaType2}</div>
  <a href={socialMediaLink2}>{socialMediaLink2}</a>
</div>
