
// 1. Example ----------------------------------

public class Hello1
{
   public static void Main()
   {
      System.Console.WriteLine("Hello, World!");
   }
}


// 2. Tests ----------------------------------

public class Trio : IEnumerable
{
    public string Name1 { get; set; }
    public string Name2 { get; set; }
    public string Name3 { get; set; }
    public IEnumerator GetEnumerator() { return new TrioEnumerator(this); }
}
public class TrioEnumerator : IEnumerator
{
    public TrioEnumerator(Trio trio) { _trio = trio; }
    private Trio _trio;
    private int _index = 0;
    public void Reset() { _index = 0; Current = null; }
    public object Current { get; private set; }
    public bool MoveNext()
    {
        _index++;
        /**/ if (_index == 1) { Current = _trio.Name1; return true; }
        else if (_index == 2) { Current = _trio.Name2; return true; }
        else if (_index == 3) { Current = _trio.Name3; return true; }
        else return false;
    }
}
